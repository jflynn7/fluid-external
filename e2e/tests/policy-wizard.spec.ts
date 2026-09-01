import { test, expect } from '@playwright/test';
import { gotoApp, switchTab } from './helpers';

test.describe('New Policy Quote Wizard E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await gotoApp(page);

    // Switch to Policy Quote Wizard tab (index 2)
    await switchTab(page, 2);
  });

  test('should load quote wizard with Step 1 active', async ({ page }) => {
    const wizardCard = page.locator('fluid-card', { hasText: 'FLUID Instant Policy Quote Engine' });
    await expect(wizardCard).toBeVisible({ timeout: 10000 });
    await expect(page.locator('text=Step 1: Primary Named Insured Details')).toBeVisible();
  });

  test('should complete multi-step quote wizard flow', async ({ page }) => {
    // --- Step 1 ---
    await expect(page.locator('text=Step 1: Primary Named Insured Details')).toBeVisible({ timeout: 10000 });
    const nextBtn1 = page.locator('fluid-button', { hasText: 'Continue Next Step' });
    await nextBtn1.dispatchEvent('click');
    await page.waitForTimeout(400);

    // --- Step 2 ---
    await expect(page.locator('text=Step 2: Custom Coverage Limits & Endorsements')).toBeVisible({ timeout: 10000 });
    const nextBtn2 = page.locator('fluid-button', { hasText: 'Continue Next Step' });
    await nextBtn2.dispatchEvent('click');
    await page.waitForTimeout(400);

    // --- Step 3 ---
    await expect(page.locator('text=Step 3: Review Effective Date & Bind Quote')).toBeVisible({ timeout: 10000 });
    const submitBtn = page.locator('fluid-button', { hasText: 'Bind & Issue Quote' });
    await submitBtn.dispatchEvent('click');
    await page.waitForTimeout(400);

    // Verify submission alert message
    const alert = page.locator('fluid-alert', { hasText: 'submitted' });
    await expect(alert).toBeAttached({ timeout: 10000 });
  });
});
