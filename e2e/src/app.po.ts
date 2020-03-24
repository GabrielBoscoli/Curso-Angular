import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(link: string) {
    return browser.get(link);
  }

  getParagraphText(selector: string) {
    return element(by.css(selector)).getText();
  }

  getElement(selector: string) {
    return element(by.css(selector));
  }

  getElementByLinkText(linkText: string) {
    return element(by.partialLinkText(linkText));
  }

  getElementByButtonText(buttonText: string) {
    return element(by.buttonText(buttonText));
  }

  getAllElements(selector: string) {
    return element.all(by.css(selector));
  }
}
