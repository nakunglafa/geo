import { RunJournalPage } from './app.po';

describe('run-journal App', () => {
  let page: RunJournalPage;

  beforeEach(() => {
    page = new RunJournalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
