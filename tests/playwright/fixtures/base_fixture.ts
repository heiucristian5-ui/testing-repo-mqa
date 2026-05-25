import { Page } from 'playwright';
import { BasicFormComponent } from '../support/components/forms/BasicFormComponent';
import { UsingGridComponent } from '../support/components/forms/UsingGridComponent';
import { InlineFormComponent } from '../support/components/forms/InlineFormComponent';
import { NoLabelsFormComponent } from '../support/components/forms/NoLabelsFormComponent';
import { BlockFormComponent } from '../support/components/forms/BlockFormComponent';
import { HorizontalFormComponent } from '../support/components/forms/HorizontalFormComponent';

import { ModalOverlaysPageComponent } from '../support/components/modalOverlays/ModalOverlaysPageComponent';

import { expect, test as base } from 'playwright/test';
import { ApplicationURLs } from '../support/components/main/applicationURLs';
import { HeaderComponent } from '../support/components/main/HeaderComponent';

import { TooltipPageComponent } from '../support/components/modalOverlays/TooltipPageComponent';
import { TooltipContentComponent } from '../support/components/modalOverlays/TooltipContentComponent';
import { ToastrPageComponent } from '../support/components/modalOverlays/ToastrPageComponent';
import { ToastComponent } from '../support/components/modalOverlays/ToastComponent';

type MyFixtures = {
  onBasicForm: BasicFormComponent;
  onGridForm: UsingGridComponent;
  onInlineForm: InlineFormComponent;
  onNoLabelsForm: NoLabelsFormComponent;
  onBlockForm: BlockFormComponent;
  onHorizontalForm: HorizontalFormComponent;

  onModalOverlaysPage: ModalOverlaysPageComponent;

  onTooltipPage: TooltipPageComponent;
  onTooltipContent: TooltipContentComponent;

  onToastrPage: ToastrPageComponent;
  onToast: ToastComponent;

  onApplicationURLs: ApplicationURLs;
  onHeader: HeaderComponent;
};

const createFixture = <T>(Component: new (page: Page) => T) => {
  return async (
    { page }: { page: Page },
    use: (fixture: T) => Promise<void>,
  ) => {
    await use(new Component(page));
  };
};

export const test = base.extend<MyFixtures>({
  onBasicForm: [createFixture(BasicFormComponent), { scope: 'test' }],

  onGridForm: [createFixture(UsingGridComponent), { scope: 'test' }],

  onInlineForm: [createFixture(InlineFormComponent), { scope: 'test' }],

  onNoLabelsForm: [createFixture(NoLabelsFormComponent), { scope: 'test' }],

  onBlockForm: [createFixture(BlockFormComponent), { scope: 'test' }],

  onHorizontalForm: [
    createFixture(HorizontalFormComponent),
    { scope: 'test' },
  ],

  onModalOverlaysPage: [
    createFixture(ModalOverlaysPageComponent),
    { scope: 'test' },
  ],

  onTooltipPage: [
    createFixture(TooltipPageComponent),
    { scope: 'test' },
  ],

  onTooltipContent: [
    createFixture(TooltipContentComponent),
    { scope: 'test' },
  ],

  onToastrPage: [
    createFixture(ToastrPageComponent),
    { scope: 'test' },
  ],

  onToast: [
    createFixture(ToastComponent),
    { scope: 'test' },
  ],

  onApplicationURLs: [
    createFixture(ApplicationURLs),
    { scope: 'test' },
  ],

  onHeader: [createFixture(HeaderComponent), { scope: 'test' }],
});

export { expect };