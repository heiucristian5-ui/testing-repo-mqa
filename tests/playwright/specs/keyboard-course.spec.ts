import { test, expect } from '@playwright/test';

test('Exercise 5', async ({ page }) => {

  await page.goto('http://localhost:4200/pages/forms/layouts');

  const radio = page.locator('nb-radio').nth(0);

  await radio.click();

});