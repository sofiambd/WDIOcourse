import { expect } from 'chai';
import contactUs from '../pages/contact.us';
import homePage from '../pages/home.page';

const assertContactUs = 'Your message has been successfully sent to our team.';
const mail = 'testaccount@testmail.com';
const orderRef = 'orderReference';
const message = 'Message';
const subjectIndex = 1;

describe('MyStore', () => {
  before('Ingresa a la página principal', async () => {
    await homePage.open('/');
    await homePage.waitUntilElementisDisplayed(await homePage.menuContent);
  });
  it('Debería llenar formulario de Contact Us', async () => {
    addStep('Ingresa a Contact Us.');
    await homePage.clickElement(await homePage.contactUs);
    await contactUs.contactUsAssert.waitForDisplayed( { timeout:6000 } );
    expect(await contactUs.contactUsAssert.getText()).to.be.equal('Contact');
    addStep('Completa los datos para envíar.');
    await contactUs.contactForm.scrollIntoView();
    await contactUs.subjectHeading.selectByIndex(subjectIndex);
    await contactUs.emailForm.setValue(mail);
    await contactUs.orderReference.setValue(orderRef);
    await contactUs.messageForm.setValue(message);
    await contactUs.clickElement(contactUs.sendBtn);
    await contactUs.waitUntilElementisDisplayed(await contactUs.successMessage);
    expect(await contactUs.successMessage.getText()).to.be.equal(assertContactUs);
    addStep('Se dirige a la página principal.');
    await contactUs.clickElement(await contactUs.mainPageBtn);
    await homePage.textAssertMainPage.scrollIntoView();
    expect(await homePage.textAssertMainPage.getText()).to.be.equal('POPULAR');
  });
});
