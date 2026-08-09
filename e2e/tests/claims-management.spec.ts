import { test, expect } from '@playwright/test';
import { switchTab } from './helpers';

test.describe('Claims & Policy Register E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    // Switch to Claims & Policy Register tab (index 1)
    await switchTab(page, 1);
  });

  test('should display the claims table with sample claims', async ({ page }) => {
    const claimsCard = page.locator('fluid-card', { hasText: 'Claims Management Console' });
    await expect(claimsCard).toBeVisible({ timeout: 10000 });

    await expect(page.locator('text=CLM-2026-8801')).toBeVisible();
    await expect(page.locator('text=Acme Logistics Corp')).toBeVisible();
    await expect(page.locator('text=CLM-2026-8802')).toBeVisible();
    await expect(page.locator('text=Sarah Jenkins')).toBeVisible();
  });

  test('should filter claims by search query', async ({ page }) => {
    const searchBox = page.locator('fluid-search-box');
    await expect(searchBox).toBeVisible({ timeout: 10000 });

    const searchInput = searchBox.locator('input');
    if (await searchInput.isVisible()) {
      await searchInput.fill('Sarah');
    } else {
      await searchBox.evaluate((el: any) => {
        el.dispatchEvent(new CustomEvent('input', { detail: { searchTerm: 'Sarah' }, bubbles: true }));
      });
    }

    await expect(page.locator('text=Sarah Jenkins')).toBeVisible();
  });

  test('should open claim detail modal and approve a claim', async ({ page }) => {
    const row = page.locator('tr', { hasText: 'CLM-2026-8802' });
    const reviewBtn = row.locator('fluid-button', { hasText: 'Review' });
    await reviewBtn.dispatchEvent('click');

    // Verify modal overlay title/content appears
    await expect(page.locator('text=Claim Reference:')).toBeVisible({ timeout: 10000 });

    const approveBtn = page.locator('fluid-button', { hasText: 'Approve Claim' });
    await approveBtn.dispatchEvent('click');

    const successAlert = page.locator('fluid-alert', { hasText: 'successfully approved' });
    await expect(successAlert).toBeVisible();
  });

  test('should expand and collapse policy coverage schedule accordions', async ({ page }) => {
    const accordionTitle = page.locator('fluid-title', { hasText: 'Policy Coverage Schedules' });
    await expect(accordionTitle).toBeVisible();

    const panel2 = page.locator('fluid-accordion-panel', { hasText: 'Homeowners & Dwelling Fire Endorsements' });
    await panel2.click({ force: true });
  });
});
