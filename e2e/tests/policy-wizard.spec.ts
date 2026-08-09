import { test, expect } from '@playwright/test';

test.describe('New Policy Quote Wizard E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    // Switch to New Policy Quote Wizard tab
    const quoteTab = page.locator('fluid-tab', { hasText: 'New Policy Quote Wizard' });
    await quoteTab.dispatchEvent('click');
    await page.waitForTimeout(300);
  });

  test('should load quote wizard with Step 1 active', async ({ page }) => {
    const wizardCard = page.locator('fluid-card', { hasText: 'Liberty Mutual Instant Policy Quote Engine' });
    await expect(wizardCard).toBeVisible();
    await expect(page.locator('text=Step 1: Primary Named Insured Details')).toBeVisible();
  });

  test('should complete multi-step quote wizard flow', async ({ page }) => {
    // --- Step 1 ---
    const nextBtn1 = page.locator('fluid-button', { hasText: 'Next Step: Coverage Options' });
    await expect(nextBtn1).toBeVisible();
    await nextBtn1.dispatchEvent('click');
    await page.waitForTimeout(300);

    // --- Step 2 ---
    await expect(page.locator('text=Step 2: Policy Line & Coverage Options')).toBeVisible();
    const nextBtn2 = page.locator('fluid-button', { hasText: 'Next Step: Effective Date & Review' });
    await nextBtn2.dispatchEvent('click');
    await page.waitForTimeout(300);

    // --- Step 3 ---
    await expect(page.locator('text=Step 3: Policy Effective Date & Final Review')).toBeVisible();
    const submitBtn = page.locator('fluid-button', { hasText: 'Submit Policy Quote Request' });
    await submitBtn.dispatchEvent('click');
    await page.waitForTimeout(300);

    // Verify submission alert message
    const alert = page.locator('fluid-alert', { hasText: 'Quote request for' });
    await expect(alert).toBeVisible();
  });
});
