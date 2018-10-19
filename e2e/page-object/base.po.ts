import { element, by, promise, browser, ElementArrayFinder, ElementFinder} from 'protractor';

export class Base {
  navigateToHome(): promise.Promise<any> {
    return browser.get('/');
  }
}
