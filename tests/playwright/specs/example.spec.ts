import { test, expect } from '@playwright/test';

test('Open Playwright Site', async ({ page }) => {

  await page.goto('https://google.com');

  await page.locator('textarea[name="q"]').fill('Playwright');

  await page.keyboard.press('Enter');

  await page.getByRole('heading', { name: /Playwright/i }).first().click();

  await expect(page).toHaveURL(/playwright/);

});