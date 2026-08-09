import { test, expect } from '@playwright/test';

test.describe('WAF Web Component Health & Audit Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
  });

  test('should verify all core FLUID design system web components exist on DOM', async ({ page }) => {
    const requiredComponents = [
      'fluid-header',
      'fluid-header-actions',
      'fluid-page-context-bar',
      'fluid-breadcrumb',
      'fluid-container',
      'fluid-grid',
      'fluid-grid-item',
      'fluid-alert',
      'fluid-button',
      'fluid-button-group',
      'fluid-tabs',
      'fluid-tab',
      'fluid-card',
      'fluid-badge',
      'fluid-footer'
    ];

    for (const tag of requiredComponents) {
      const el = page.locator(tag).first();
      await expect(el).toBeAttached({ timeout: 5000 });
    }
  });

  test('should check WAF verification table on WAF Test Suite tab', async ({ page }) => {
    const wafTab = page.locator('fluid-tab', { hasText: 'WAF Test Suite' });
    await wafTab.dispatchEvent('click');
    await page.waitForTimeout(300);

    await expect(page.locator('fluid-card', { hasText: 'Web Application Firewall (WAF) Component Health Audit' })).toBeVisible();
    await expect(page.locator('text=fluid-header')).toBeVisible();
    await expect(page.locator('text=fluid-bar-chart')).toBeVisible();
    await expect(page.locator('text=fluid-modal')).toBeVisible();
  });
});
