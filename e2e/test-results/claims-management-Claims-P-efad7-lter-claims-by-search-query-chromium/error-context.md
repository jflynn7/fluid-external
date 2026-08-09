# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: claims-management.spec.ts >> Claims & Policy Register E2E Tests >> should filter claims by search query
- Location: tests/claims-management.spec.ts:24:7

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: locator.dispatchEvent: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('fluid-tab').filter({ hasText: 'Claims & Policy Register' })

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e4]:
    - generic [ref=e5]:
      - link [ref=e7] [cursor=pointer]:
        - /url: "#"
      - navigation "Main" [ref=e52]:
        - list [ref=e53]:
          - listitem [ref=e54]:
            - link "Operations Dashboard" [ref=e55] [cursor=pointer]:
              - /url: "#"
          - listitem [ref=e57]:
            - link "Claims Center" [ref=e58] [cursor=pointer]:
              - /url: "#"
          - listitem [ref=e60]:
            - link "Policy Quotes" [ref=e61] [cursor=pointer]:
              - /url: "#"
          - listitem [ref=e63]:
            - link "WAF Health & Verification" [ref=e64] [cursor=pointer]:
              - /url: "#"
  - generic [ref=e68]:
    - complementary [ref=e71]:
      - generic [ref=e75]:
        - link "Liberty Mutual Enterprise" [ref=e78] [cursor=pointer]:
          - /url: "#"
        - link "Commercial & Personal Lines" [ref=e88] [cursor=pointer]:
          - /url: "#"
        - strong [ref=e96]:
          - generic: WAF Deployment Test Dashboard
    - main [ref=e98]:
      - generic:
        - generic:
          - generic [ref=e100]:
            - generic:
              - alert [ref=e104]:
                - generic [ref=e111]: This dashboard application loads FLUID Web Components at runtime to validate WAF rules and component availability post-deployment.
              - generic [ref=e116]:
                - generic [ref=e117]:
                  - heading "Insurance Claims & Policy Operations Dashboard" [level=1] [ref=e119]
                  - paragraph [ref=e121]:
                    - generic:
                      - text: "Liberty Mutual Claims Center • Environment:"
                      - strong [ref=e122]: Pre-Production WAF Test Bed
                - generic [ref=e123]:
                  - generic:
                    - group
              - separator [ref=e125]
              - generic [ref=e129]:
                - tablist [ref=e132]:
                  - tab "Executive Overview & Metrics" [selected] [ref=e133] [cursor=pointer]
                  - tab "Claims & Policy Register" [ref=e135] [cursor=pointer]
                  - tab "New Policy Quote Wizard" [ref=e137] [cursor=pointer]
                  - tab "WAF Component Audit & Verification" [ref=e139] [cursor=pointer]
                - tabpanel "Executive Overview & Metrics" [ref=e142]:
                  - generic [ref=e144]:
                    - generic:
                      - generic [ref=e145]:
                        - generic [ref=e148]:
                          - generic [ref=e149]:
                            - button "Active Policies Across all lines of business" [expanded] [ref=e151] [cursor=pointer]:
                              - generic [ref=e152]: Active Policies
                              - generic [ref=e153]: Across all lines of business
                            - button "Collapse" [expanded] [ref=e155] [cursor=pointer]
                          - generic [ref=e162]:
                            - generic:
                              - generic [ref=e164]:
                                - generic:
                                  - heading "142,850" [level=2] [ref=e166]
                                  - generic [ref=e167]: Active
                              - paragraph [ref=e170]:
                                - generic: Portfolio Capacity Usage (85%)
                              - progressbar "Progress" [ref=e174]
                        - generic [ref=e178]:
                          - generic [ref=e179]:
                            - button "Open Claims Pending review or approval" [expanded] [ref=e181] [cursor=pointer]:
                              - generic [ref=e182]: Open Claims
                              - generic [ref=e183]: Pending review or approval
                            - button "Collapse" [expanded] [ref=e185] [cursor=pointer]
                          - generic [ref=e192]:
                            - generic:
                              - generic [ref=e194]:
                                - generic:
                                  - heading "384" [level=2] [ref=e196]
                                  - generic [ref=e197]: 384 Pending
                              - paragraph [ref=e200]:
                                - generic: "Average Processing Time: 3.2 Days"
                              - progressbar "Progress" [ref=e204]
                        - generic [ref=e208]:
                          - generic [ref=e209]:
                            - button "Monthly Loss Ratio Target threshold < 65%" [expanded] [ref=e211] [cursor=pointer]:
                              - generic [ref=e212]: Monthly Loss Ratio
                              - generic [ref=e213]: Target threshold < 65%
                            - button "Collapse" [expanded] [ref=e215] [cursor=pointer]
                          - generic [ref=e222]:
                            - generic:
                              - generic [ref=e224]:
                                - generic:
                                  - heading "62.4%" [level=2] [ref=e226]
                                  - generic [ref=e227]: Optimal
                              - paragraph [ref=e230]:
                                - generic: "Year-to-Date Variance: -2.1%"
                              - progressbar "Progress" [ref=e234]
                        - generic [ref=e238]:
                          - generic [ref=e239]:
                            - button "WAF Component Health Runtime web components" [expanded] [ref=e241] [cursor=pointer]:
                              - generic [ref=e242]: WAF Component Health
                              - generic [ref=e243]: Runtime web components
                            - button "Collapse" [expanded] [ref=e245] [cursor=pointer]
                          - generic [ref=e252]:
                            - generic:
                              - generic [ref=e254]:
                                - generic:
                                  - heading "100%" [level=2] [ref=e256]
                                  - generic [ref=e257]: Passed
                              - paragraph [ref=e260]:
                                - generic: 45 FLUID Components Validated
                              - progressbar "Progress" [ref=e264]
                      - generic [ref=e268]:
                        - generic [ref=e271]:
                          - generic [ref=e272]:
                            - button "Weekly Claim Filings Volume" [expanded] [ref=e274] [cursor=pointer]
                            - button "Collapse" [expanded] [ref=e277] [cursor=pointer]
                          - heading "Filing Volume" [level=1] [ref=e288]
                        - generic [ref=e292]:
                          - generic [ref=e293]:
                            - button "Policy Volume Distribution by Line of Business" [expanded] [ref=e295] [cursor=pointer]
                            - button "Collapse" [expanded] [ref=e298] [cursor=pointer]
                          - generic [ref=e308]:
                            - heading "LOB Distribution" [level=1] [ref=e310]
                            - generic [ref=e312]:
                              - generic [ref=e313]: "Auto Insurance: 45.0%"
                              - generic [ref=e317]: "Homeowners: 30.0%"
                              - generic [ref=e321]: "Commercial Property: 15.0%"
                              - generic [ref=e325]: "Workers Comp: 10.0%"
          - generic:
            - generic:
              - generic: How satisfied are you with the FLUID Insurance Dashboard application?
              - generic: Very dissatisfied
              - generic: Dissatisfied
              - generic: Neutral
              - generic: Satisfied
              - generic: Very satisfied
  - contentinfo [ref=e330]:
    - generic [ref=e332]:
      - text: Feedback
      - button [ref=e333] [cursor=pointer]
    - paragraph [ref=e336]:
      - generic: © 2026 Liberty Mutual Insurance Group • FLUID Internal Design System Test Bed • Confidential & Enterprise Restricted
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Claims & Policy Register E2E Tests', () => {
  4  |   test.beforeEach(async ({ page }) => {
  5  |     await page.goto('/');
  6  |     await page.waitForLoadState('domcontentloaded');
  7  | 
  8  |     // Switch to Claims & Policy Register tab
  9  |     const claimsTab = page.locator('fluid-tab', { hasText: 'Claims & Policy Register' });
> 10 |     await claimsTab.dispatchEvent('click');
     |                     ^ Error: locator.dispatchEvent: Test timeout of 30000ms exceeded.
  11 |     await page.waitForTimeout(300);
  12 |   });
  13 | 
  14 |   test('should display the claims table with sample claims', async ({ page }) => {
  15 |     const claimsCard = page.locator('fluid-card', { hasText: 'Claims Management Console' });
  16 |     await expect(claimsCard).toBeVisible();
  17 | 
  18 |     await expect(page.locator('text=CLM-2026-8801')).toBeVisible();
  19 |     await expect(page.locator('text=Acme Logistics Corp')).toBeVisible();
  20 |     await expect(page.locator('text=CLM-2026-8802')).toBeVisible();
  21 |     await expect(page.locator('text=Sarah Jenkins')).toBeVisible();
  22 |   });
  23 | 
  24 |   test('should filter claims by search query', async ({ page }) => {
  25 |     const searchBox = page.locator('fluid-search-box');
  26 |     await expect(searchBox).toBeVisible();
  27 | 
  28 |     // Fill search box input or emit search event
  29 |     const searchInput = searchBox.locator('input');
  30 |     if (await searchInput.isVisible()) {
  31 |       await searchInput.fill('Sarah');
  32 |     } else {
  33 |       await searchBox.evaluate((el: any) => {
  34 |         el.dispatchEvent(new CustomEvent('input', { detail: { searchTerm: 'Sarah' }, bubbles: true }));
  35 |       });
  36 |     }
  37 | 
  38 |     await expect(page.locator('text=Sarah Jenkins')).toBeVisible();
  39 |   });
  40 | 
  41 |   test('should open claim detail modal and approve a claim', async ({ page }) => {
  42 |     const reviewBtn = page.locator('tr', { hasText: 'CLM-2026-8802' }).locator('fluid-button', { hasText: 'Review' });
  43 |     await reviewBtn.dispatchEvent('click');
  44 | 
  45 |     const modal = page.locator('fluid-modal');
  46 |     await expect(modal).toBeVisible();
  47 |     await expect(page.locator('text=Sarah Jenkins')).toBeVisible();
  48 | 
  49 |     const approveBtn = modal.locator('fluid-button', { hasText: 'Approve Claim' });
  50 |     await approveBtn.dispatchEvent('click');
  51 | 
  52 |     const successAlert = page.locator('fluid-alert', { hasText: 'successfully approved' });
  53 |     await expect(successAlert).toBeVisible();
  54 |   });
  55 | 
  56 |   test('should expand and collapse policy coverage schedule accordions', async ({ page }) => {
  57 |     const accordionTitle = page.locator('fluid-title', { hasText: 'Policy Coverage Schedules' });
  58 |     await expect(accordionTitle).toBeVisible();
  59 | 
  60 |     const panel2 = page.locator('fluid-accordion-panel', { hasText: 'Homeowners & Dwelling Fire Endorsements' });
  61 |     await panel2.dispatchEvent('click');
  62 |     await page.waitForTimeout(300);
  63 |   });
  64 | });
  65 | 
```