import { browser, by, element, promise, ElementFinder, ElementArrayFinder } from 'protractor';
import {Base} from './base.po';

export class Pastebin extends Base {

  getPasebin(): ElementFinder {
    return element(by.css('.pasebin'));
  }
}
