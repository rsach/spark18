import { Fire2Page } from './app.po';

describe('fire2 App', function() {
  let page: Fire2Page;

  beforeEach(() => {
    page = new Fire2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
