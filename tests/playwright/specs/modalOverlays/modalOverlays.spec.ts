import { test } from '../../fixtures/base_fixture';

test.describe('Modal Overlays page', () => {

  test('user should be able to open dialog', async ({
    onApplicationURLs,
    onModalOverlaysPage,
  }) => {

    await onApplicationURLs.navigateToModalOverlaysPage();

    await onModalOverlaysPage.openDialog();
  });

  test('user should be able to open popover', async ({
    onApplicationURLs,
    onModalOverlaysPage,
  }) => {

    await onApplicationURLs.navigateToModalOverlaysPage();

    await onModalOverlaysPage.openPopover();
  });

  test('user should be able to open toast', async ({
    onApplicationURLs,
    onModalOverlaysPage,
  }) => {

    await onApplicationURLs.navigateToModalOverlaysPage();

    await onModalOverlaysPage.openToast();
  });

});