import { test, expect } from '@playwright/test';

test('Exercise 1', async ({ page }) => {

  await page.goto('http://localhost:4200');

  await page.getByText('Forms').click();

  await page.getByText('Form Layouts').click();

  await page.getByLabel('First Name').fill('Ada');

  await page.getByLabel('Last Name').fill('Lovelace');

  await page.getByLabel('Website').fill('https://ada.dev');

});