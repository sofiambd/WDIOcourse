import { expect } from 'chai';

import DATOS from '../data/loginData';
import homePage from '../pages/home.page';
import loginPage from '../pages/login.page';

describe('MyStore', () => {
   
    it('Debería realizar login', async () => {

        await homePage.open('/');

        await $('.sf-menu').waitForDisplayed();
        expect(
            await browser.checkElement(await $(".sf-menu"), "wdio-headerContainer", {

            }),
            "Error: la barra de categorías de Automation Practice no coincide con la original"
        ).equal(0);

        await homePage.clickElement(await homePage.signIn);
        await loginPage.emailForm.scrollIntoView();
        await loginPage.loginForm(DATOS.email,DATOS.password);
        await loginPage.clickElement(await loginPage.mainPageBtn);
        await homePage.textAssertMainPage.scrollIntoView();
        expect(await homePage.textAssertMainPage.getText()).to.be.equal('Subsidiary of seleniumframework.com');

    });
});