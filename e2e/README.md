# FLUID External - End-to-End (E2E) Sub-Package

This directory (`e2e/`) is a standalone sub-package for running Playwright end-to-end tests against pre-production deployments (e.g. Vercel preview environments) or local builds.

---

## 🚀 Running Pre-Production Post-Deployment Tests

To execute tests against a pre-production deployment URL:

```bash
# Run from project root:
BASE_URL=https://fluid-external-preprod.vercel.app npm run test:e2e

# Or from inside the e2e directory:
cd e2e
BASE_URL=https://fluid-external-preprod.vercel.app npm test
```

---

## 💻 Local Testing

```bash
# From project root:
npm run test:e2e

# Interactive UI Mode:
npm run test:e2e:ui

# View HTML Test Report:
npm run test:e2e:report
```

---

## 🛠️ Package Setup

```bash
cd e2e
npm install
npx playwright install chromium
```
