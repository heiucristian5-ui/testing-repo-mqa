import { test } from '../../fixtures/base_fixture';

test.describe('Auth pages', () => {
  test('login: fill form and assert submit is enabled', async ({
    onApplicationURLs,
    onLoginPage,
  }) => {
    await test.step('Navigate to the login page', async () => {
      await onApplicationURLs.navigateToLoginPage();
    });

    await test.step('Fill email and password', async () => {
      await onLoginPage.fillEmail('test@example.com');
      await onLoginPage.fillPassword('password123');
    });

    await test.step('Toggle Remember me', async () => {
      await onLoginPage.toggleRememberMe();
    });

    await test.step('Assert the Log In button is enabled', async () => {
      await onLoginPage.assertSubmitEnabled();
    });
  });

  test('register: fill form and assert submit is enabled', async ({
    onApplicationURLs,
    onRegisterPage,
  }) => {
    await test.step('Navigate to the register page', async () => {
      await onApplicationURLs.navigateToRegisterPage();
    });

    await test.step('Fill the registration form', async () => {
      await onRegisterPage.fillFullName('Jane Doe');
      await onRegisterPage.fillEmail('jane@example.com');
      await onRegisterPage.fillPassword('password123');
      await onRegisterPage.fillConfirmPassword('password123');
      await onRegisterPage.acceptTerms();
    });

    await test.step('Assert the Register button is enabled', async () => {
      await onRegisterPage.assertSubmitEnabled();
    });
  });

  test('request-password: fill email and assert submit is enabled', async ({
    onApplicationURLs,
    onRequestPasswordPage,
  }) => {
    await test.step('Navigate to the request password page', async () => {
      await onApplicationURLs.navigateToRequestPasswordPage();
    });

    await test.step('Fill the email', async () => {
      await onRequestPasswordPage.fillEmail('test@example.com');
    });

    await test.step('Assert the Request password button is enabled', async () => {
      await onRequestPasswordPage.assertSubmitEnabled();
    });
  });

  test('reset-password: fill new password and confirm, assert submit is enabled', async ({
    onApplicationURLs,
    onResetPasswordPage,
  }) => {
    await test.step('Navigate to the reset password page', async () => {
      await onApplicationURLs.navigateToResetPasswordPage();
    });

    await test.step('Fill new password and confirmation', async () => {
      await onResetPasswordPage.fillPassword('newpassword123');
      await onResetPasswordPage.fillConfirmPassword('newpassword123');
    });

    await test.step('Assert the Change password button is enabled', async () => {
      await onResetPasswordPage.assertSubmitEnabled();
    });
  });
});
