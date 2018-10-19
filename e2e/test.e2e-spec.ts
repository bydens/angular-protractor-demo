import { browser, by, element } from 'protractor';

describe('Protractor by Demo', () => {
    beforeEach(() => {
        browser.get('/');
    });

    it('should display the name of the application', () => {
        expect(element(by.css('.pastebin')).getText()).toContain('Pastebin Application');
    });

    it('should click the create Paste button', () => {
        expect(element(by.id('source-modal')).isPresent()).toBeFalsy('The modal window shouldn\'t appear right now');
        element(by.buttonText('create Paste')).click();
        expect(element(by.id('source-modal')).isPresent).toBeTruthy('The modal window should appear now');
    });

  it('should accept and save input values', () => {
    element(by.buttonText('create Paste')).click();

    element(by.name('title')).sendKeys('Hello world in Ruby');
    element(by.name('language')).element(by.cssContainingText('option', 'Java'));
    element(by.name('paste')).sendKeys('Hello');

    element(by.buttonText('Save')).click();

    const lastTrow = element.all(by.tagName('tr')).last();
    // console.log(lastTrow.getText());
    expect(lastTrow.getText()).toContain('Hello world in Ruby');
  });
});
