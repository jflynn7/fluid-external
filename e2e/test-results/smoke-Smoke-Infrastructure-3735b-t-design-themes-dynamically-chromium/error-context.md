# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> Smoke & Infrastructure Tests >> should toggle dark/light design themes dynamically
- Location: tests/smoke.spec.ts:23:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('fluid-button').filter({ hasText: /Theme:/i })
Expected: visible
Received: hidden
Timeout:  5000ms

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('fluid-button').filter({ hasText: /Theme:/i })
    13 × locator resolved to <fluid-button size="small" class="hydrated" _ngcontent-txk-c1="" data-dd-action-name="undefined"> Theme: CORP </fluid-button>
       - unexpected value "hidden"

```

```yaml
- banner:
  - link:
    - /url: "#"
    - img
  - navigation "Main":
    - list:
      - listitem:
        - link "Operations Dashboard":
          - /url: "#"
      - listitem:
        - link "Claims Center":
          - /url: "#"
      - listitem:
        - link "Policy Quotes":
          - /url: "#"
      - listitem:
        - link "WAF Health & Verification":
          - /url: "#"
- complementary:
  - link "Liberty Mutual Enterprise":
    - /url: "#"
  - link "Commercial & Personal Lines":
    - /url: "#"
  - strong: WAF Deployment Test Dashboard
- main:
  - alert: This dashboard application loads FLUID Web Components at runtime to validate WAF rules and component availability post-deployment.
  - heading "Insurance Claims & Policy Operations Dashboard" [level=1]
  - paragraph:
    - text: "Liberty Mutual Claims Center • Environment:"
    - strong: Pre-Production WAF Test Bed
  - group
  - separator
  - tablist:
    - tab "Executive Overview & Metrics" [selected]
    - tab "Claims & Policy Register"
    - tab "New Policy Quote Wizard"
    - tab "WAF Component Audit & Verification"
  - tabpanel "Executive Overview & Metrics":
    - button "Active Policies Across all lines of business" [expanded]
    - button "Collapse" [expanded]
    - heading "142,850" [level=2]
    - text: Active
    - paragraph: Portfolio Capacity Usage (85%)
    - progressbar "Progress"
    - button "Open Claims Pending review or approval" [expanded]
    - button "Collapse" [expanded]
    - heading "384" [level=2]
    - text: 384 Pending
    - paragraph: "Average Processing Time: 3.2 Days"
    - progressbar "Progress"
    - button "Monthly Loss Ratio Target threshold < 65%" [expanded]
    - button "Collapse" [expanded]
    - heading "62.4%" [level=2]
    - text: Optimal
    - paragraph: "Year-to-Date Variance: -2.1%"
    - progressbar "Progress"
    - button "WAF Component Health Runtime web components" [expanded]
    - button "Collapse" [expanded]
    - heading "100%" [level=2]
    - text: Passed
    - paragraph: 45 FLUID Components Validated
    - progressbar "Progress"
    - button "Weekly Claim Filings Volume" [expanded]
    - button "Collapse" [expanded]
    - heading "Filing Volume" [level=1]
    - button "Policy Volume Distribution by Line of Business" [expanded]
    - button "Collapse" [expanded]
    - heading "LOB Distribution" [level=1]
    - img
    - text: "Auto Insurance: 45.0%"
    - img
    - text: "Homeowners: 30.0%"
    - img
    - text: "Commercial Property: 15.0%"
    - img
    - text: "Workers Comp: 10.0%"
- contentinfo:
  - text: Feedback
  - button
  - paragraph: © 2026 Liberty Mutual Insurance Group • FLUID Internal Design System Test Bed • Confidential & Enterprise Restricted
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Smoke & Infrastructure Tests', () => {
  4  |   test.beforeEach(async ({ page }) => {
  5  |     await page.goto('/');
  6  |     await page.waitForLoadState('domcontentloaded');
  7  |   });
  8  | 
  9  |   test('should load the insurance dashboard home page successfully', async ({ page }) => {
  10 |     const mainTitle = page.locator('fluid-title', { hasText: 'Insurance Claims & Policy Operations Dashboard' });
  11 |     await expect(mainTitle).toBeVisible({ timeout: 10000 });
  12 | 
  13 |     const envText = page.locator('text=Pre-Production WAF Test Bed');
  14 |     await expect(envText).toBeVisible({ timeout: 10000 });
  15 |   });
  16 | 
  17 |   test('should display global navigation header and brand logo', async ({ page }) => {
  18 |     const header = page.locator('fluid-header');
  19 |     await expect(header).toBeVisible();
  20 |     await expect(page.locator('text=Liberty Mutual Insurance')).toBeVisible();
  21 |   });
  22 | 
  23 |   test('should toggle dark/light design themes dynamically', async ({ page }) => {
  24 |     const themeBtn = page.locator('fluid-button', { hasText: /Theme:/i });
> 25 |     await expect(themeBtn).toBeVisible();
     |                            ^ Error: expect(locator).toBeVisible() failed
  26 | 
  27 |     // Click to toggle theme to LM
  28 |     await themeBtn.dispatchEvent('click');
  29 |     await page.waitForTimeout(300);
  30 | 
  31 |     // Click again to toggle back to CORP
  32 |     await themeBtn.dispatchEvent('click');
  33 |     await page.waitForTimeout(300);
  34 |   });
  35 | 
  36 |   test('should render executive overview metric cards', async ({ page }) => {
  37 |     await expect(page.locator('fluid-card', { hasText: 'Active Policies' })).toBeVisible();
  38 |     await expect(page.locator('fluid-card', { hasText: 'Open Claims' })).toBeVisible();
  39 |     await expect(page.locator('fluid-card', { hasText: 'Monthly Loss Ratio' })).toBeVisible();
  40 |     await expect(page.locator('fluid-card', { hasText: 'WAF Component Health' })).toBeVisible();
  41 |   });
  42 | });
  43 | 
```