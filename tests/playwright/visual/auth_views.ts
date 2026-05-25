import { test } from '../fixtures/base_fixture';
import {
  argosComponentScreenshot,
  argosFullScreenshot,
} from '../support/utils/argosSmartScreenshot';

test.describe('Auth Layout', () => {
  test('Login page view', async ({ page, onApplicationURLs }) => {
    await onApplicationURLs.navigateToLoginPage();

    await argosFullScreenshot({ page, snapshotName: 'Login page view' });
  });

  test('Register page view', async ({ page, onApplicationURLs }) => {
    await onApplicationURLs.navigateToRegisterPage();

    await argosFullScreenshot({ page, snapshotName: 'Register page view' });
  });

  test('request password page view', async ({ page, onApplicationURLs }) => {
    // await onApplicationURLs.navigateToRequestPasswordPage();

    await page.setViewportSize({ width: 375, height: 812 });

    await argosFullScreenshot({
      page,
      snapshotName: 'request password page view - Mobile',
    });
  });

  test('reset password page view', async ({ page, onApplicationURLs }) => {
    await onApplicationURLs.navigateToResetPasswordPage();

    await argosFullScreenshot({
      page,
      snapshotName: 'reset password page view',
    });
  });
});