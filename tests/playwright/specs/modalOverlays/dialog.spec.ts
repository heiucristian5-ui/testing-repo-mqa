import { test, expect } from '../../fixtures/base_fixture';

test.describe('Dialog page', () => {
  test('visual test for dialog page', async ({ page }) => {
    await page.goto('http://localhost:4200');

    await expect(page).toHaveScreenshot('dialog-page.png');
  });
});