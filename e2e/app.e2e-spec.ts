import { Uni7CarreirasPage } from './app.po';

describe('uni7-carreiras App', () => {
  let page: Uni7CarreirasPage;

  beforeEach(() => {
    page = new Uni7CarreirasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
