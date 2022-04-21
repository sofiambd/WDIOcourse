import { expect } from 'chai';
import contactUs from '../pages/contact.us';
import homePage from '../pages/home.page';

describe('MyStore', () => {
    it('Debería llenar formulario de Contact Us', async () => {
        await homePage.open('/');
        await homePage.clickElement(await homePage.contactUs);
        await contactUs.contactUsAssert.waitForDisplayed( { timeout:6000 } );
        expect(await contactUs.contactUsAssert.getText()).to.be.equal('Contact');
        await contactUs.contactForm.scrollIntoView();
        await contactUs.subjectHeading.selectByIndex(1);
        await contactUs.emailForm.setValue('testaccount@testmail.com');
        await contactUs.orderReference.setValue('orderReference');
        await contactUs.messageForm.setValue('Message');
        await contactUs.clickElement(contactUs.sendBtn);
        await contactUs.clickElement(await contactUs.mainPageBtn);
        await homePage.textAssertMainPage.scrollIntoView();
        expect(await homePage.textAssertMainPage.getText()).to.be.equal('Subsidiary of seleniumframework.com');
    });
});