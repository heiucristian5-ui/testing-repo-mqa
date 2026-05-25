import { Locator, Page } from 'playwright';

export class ModalOverlaysPageComponent {
  readonly page: Page;

  readonly openDialogButton: Locator;
  readonly openPopoverButton: Locator;
  readonly openToastButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.openDialogButton = page.getByText('Open Dialog');
    this.openPopoverButton = page.getByText('Show Popover');
    this.openToastButton = page.getByText('Show toast');
  }

  async openDialog() {
    await this.openDialogButton.click();
  }

  async openPopover() {
    await this.openPopoverButton.click();
  }

  async openToast() {
    await this.openToastButton.click();
  }
}