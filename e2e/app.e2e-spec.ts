import { RedditAngularClonePage } from './app.po';

describe('reddit-angular-clone App', () => {
  let page: RedditAngularClonePage;

  beforeEach(() => {
    page = new RedditAngularClonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
