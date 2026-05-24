import { test, expect } from '@playwright/test';

test('Exercise 1', async ({ page }) => {

  await page.goto('http://localhost:4200');

  await page.getByLabel('First Name').fill('Ada');

  await page.getByLabel('Last Name').fill('Lovelace');

  await page.getByLabel('Website').fill('https://ada.dev');

});


test('Exercise 2', async ({ page }) => {

  await page.goto('http://localhost:4200');

  const forms = page.locator('.info-card');

  const basicForm = forms.filter({
    has: page.locator('nb-card-header', { hasText: 'Basic form' })
  });

  await basicForm.getByLabel('Email').fill('test@test.com');

});


test('Exercise 3', async ({ page }) => {

  await page.goto('http://localhost:4200');

  const cards = page.locator('nb-card');

  await expect(cards).toHaveCount(6);

  await cards.nth(0).getByRole('button').click();

});