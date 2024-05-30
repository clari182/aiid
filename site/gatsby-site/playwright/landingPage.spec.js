// @ts-check
const { test } = require('@playwright/test');

test('test homepage', async ({ page }) => {
  await page.goto('/');
});

test('Sends a search to the Discover app', async ({ page }) => {
  await page.goto('/');

  await page.waitForLoadState('domcontentloaded');

  await page.fill('form#quickSearch input', 'Test');
  await page.locator('form#quickSearch').press('Enter');
  await page.waitForLoadState('domcontentloaded');

  page.waitForURL('/apps/discover/?s=Test');
});
