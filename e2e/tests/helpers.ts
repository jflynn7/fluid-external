import { Page } from '@playwright/test';

const TAB_TITLES = [
  'Executive Overview & Metrics',
  'Claims & Policy Register',
  'New Policy Quote Wizard',
  'WAF Component Audit & Verification'
];

/**
 * Switch tabs by clicking the tab header text inside shadow DOM of fluid-tabs
 */
export async function switchTab(page: Page, tabIndex: number) {
  const title = TAB_TITLES[tabIndex] || TAB_TITLES[0];
  const tabItem = page.locator('fluid-tabs').getByText(title).first();
  await tabItem.click({ force: true });
  await page.waitForTimeout(400);
}
