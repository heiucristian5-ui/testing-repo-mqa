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

type MyFixtures = {
  onBasicForm: BasicFormComponent;
  onGridForm: UsingGridComponent;
  onInlineForm: InlineFormComponent;
  onNoLabelsForm: NoLabelsFormComponent;
  onBlockForm: BlockFormComponent;
  onHorizontalForm: HorizontalFormComponent;

  onModalOverlaysPage: ModalOverlaysPageComponent;

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

  onApplicationURLs: [createFixture(ApplicationURLs), { scope: 'test' }],

  onHeader: [createFixture(HeaderComponent), { scope: 'test' }],
});

export { expect };