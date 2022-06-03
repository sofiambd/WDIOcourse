import { expect } from 'chai';
import { DATA } from '../data/loginData.json';

import homePage from '../pages/home.page';
import loginPage from '../pages/login.page';

const userOne = DATA.userOne;
const userTwo = DATA.userTwo;
const arrayUsers = [userOne, userTwo];
const accountTxt = 'My account';

describe('MyStore', () => {
  arrayUsers.forEach((users) => {
    before('Ingresa a la página principal', async () => {
      await homePage.open('/');
      await homePage.waitUntilElementisDisplayed(await homePage.menuContent);
    });
    it(`Debería realizar login con el usuario ${users.name}`, async () => {
      addStep('Realiza la regresión visual en la pagina principal.');
      expect(
          await browser.checkElement(await homePage.menuContent, "wdio-headerContainer", {
          }),
          "Error: la barra de categorías de Automation Practice no coincide con la original"
      ).equal(0);
      addStep('Ingresa a Sign In y completa los datos para ingresar.');
      await homePage.clickElement(await homePage.signIn);
      await loginPage.emailForm.scrollIntoView();
      await loginPage.loginForm(users.email, users.password);
      expect(await loginPage.pageHeading.getText()).to.be.equal(accountTxt);
      addStep('Se dirige a la página principal y realiza el logut.');
      await loginPage.clickElement(await loginPage.mainPageBtn);
      await homePage.textAssertMainPage.scrollIntoView();
      expect(await homePage.textAssertMainPage.getText()).to.be.equal('POPULAR');
      await homePage.logoutBtn.scrollIntoView();
      await homePage.clickElement(await homePage.logoutBtn);
    });
  });
});
