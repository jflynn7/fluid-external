import { test, expect } from '@playwright/test';
import { gotoApp, switchTab } from './helpers';

test.describe('WAF Web Component Health & Audit Tests', () => {
  test.beforeEach(async ({ page }) => {
    await gotoApp(page);
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
    await switchTab(page, 3);

    const auditCard = page.locator('fluid-card', { hasText: 'Post-Deployment WAF Component Audit Suite' });
    await expect(auditCard).toBeVisible({ timeout: 10000 });
    await expect(page.locator('text=Verified FLUID Web Components Checklist')).toBeVisible({ timeout: 10000 });
  });
});
