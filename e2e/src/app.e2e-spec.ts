import { AppPage } from './app.po';
import { browser } from 'protractor';
import { LoginComponent } from 'src/app/login/login.component';

describe('workspace-project App', () => {
  let page: AppPage;
  let login: LoginComponent;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have a title', () => {
    page.navigateTo('/');

    expect(browser.getTitle()).toEqual('Confusion');
  });

  it('should display message saying Ristorante Con Fusion', () => {
    page.navigateTo('/');
    expect(page.getParagraphText('app-root h1')).toEqual('Ristorante Con Fusion');
  });

  it('should navigate to about us page by clicking on the link', () => {
    page.navigateTo('/');

    let navlink = page.getAllElements('a').get(1);
    navlink.click();

    expect(page.getParagraphText('h3')).toBe('About Us');
  });

  it('should enter a new comment for the first dish', () => {
    page.navigateTo('/dishdetail/0');

    const newAuthor = page.getElement('input[type=text]');
    newAuthor.sendKeys('Test Author');

    const newComment = page.getElement('textarea');
    newComment.sendKeys('Test Comment');

    const newSubmitButton = page.getElement('button[type=submit]');
    newSubmitButton.click();

    browser.pause();
  });

  it('should open login modal dialog', () => {
    page.navigateTo('/');

    let dialog = page.getElement('mat-dialog-content');
    expect(dialog.isPresent()).toBe(false);
    page.getElementByLinkText('Login').click();
    browser.waitForAngular();
    dialog = page.getElement('mat-dialog-content');
    expect(dialog.isDisplayed()).toBe(true);
  });

  it('should open login modal dialog and submit', () => {
    page.navigateTo('/');

    page.getElementByLinkText('Login').click();
    browser.waitForAngular();

    const userName = page.getElement('input[type=text]');
    userName.sendKeys('Test Username');

    const submitButton = page.getElement('button[type=submit]');
    submitButton.click();

    //dialog should be visible because of invalid form
    let dialog = page.getElement('mat-dialog-content');
    expect(dialog.isDisplayed()).toBe(true);

    const password = page.getElement('input[type=password]');
    password.sendKeys('Test Password');

    submitButton.click();
    browser.driver.sleep(1000); //you can see on the console browser that the submission worked
    browser.waitForAngular();

    dialog = page.getElement('mat-dialog-content');
    expect(dialog.isPresent()).toBe(false);
  });

  it('should cancel login', () => {
    page.navigateTo('/');

    let dialog = page.getElement('mat-dialog-content');
    expect(dialog.isPresent()).toBe(false);

    page.getElementByLinkText('Login').click();
    
    page.getElementByButtonText('Cancel').click();
    browser.driver.sleep(1000); //you can see on browser that the modal window closed and nothing was submitted on the console
    browser.waitForAngular();
    
    dialog = page.getElement('mat-dialog-content');
    expect(dialog.isPresent()).toBe(false);
  });
});
