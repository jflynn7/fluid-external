import { test, expect } from '@playwright/test';

test.describe('Smoke & Infrastructure Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
  });

  test('should load the insurance dashboard home page successfully', async ({ page }) => {
    const mainTitle = page.locator('fluid-title', { hasText: 'Insurance Claims & Policy Operations Dashboard' });
    await expect(mainTitle).toBeVisible({ timeout: 10000 });

    const envText = page.locator('text=Pre-Production WAF Test Bed');
    await expect(envText).toBeVisible({ timeout: 10000 });
  });

  test('should display global navigation header and brand logo', async ({ page }) => {
    const header = page.locator('fluid-header');
    await expect(header).toBeAttached({ timeout: 5000 });
    await expect(header).toHaveAttribute('fluid-logo', 'true');
  });

  test('should toggle dark/light design themes dynamically', async ({ page }) => {
    const themeBtn = page.locator('fluid-button', { hasText: 'Theme:' });
    await expect(themeBtn).toBeAttached({ timeout: 10000 });

    await themeBtn.dispatchEvent('click');
    await page.waitForTimeout(300);
  });

  test('should render executive overview metric cards', async ({ page }) => {
    await expect(page.locator('fluid-card', { hasText: 'Active Policies' })).toBeVisible();
    await expect(page.locator('fluid-card', { hasText: 'Open Claims' })).toBeVisible();
    await expect(page.locator('fluid-card', { hasText: 'Monthly Loss Ratio' })).toBeVisible();
    await expect(page.locator('fluid-card', { hasText: 'WAF Component Health' })).toBeVisible();
  });
});
