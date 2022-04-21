import { expect } from 'chai';
import DATOS from '../data/loginData';
import categoryPage from '../pages/category.page';
import homePage from '../pages/home.page';
import loginPage from '../pages/login.page';
import productPage from '../pages/product.page';


describe('MyStore', () => {
    it('Debería seleccionar un producto y agregarlo a la WishList.', async () => {

        await homePage.open('/');
        await homePage.clickElement(await homePage.signIn);
        await loginPage.emailForm.scrollIntoView();
        await loginPage.loginForm(DATOS.email,DATOS.password);
        await loginPage.clickElement(await loginPage.mainPageBtn);
        await homePage.clickElement(await homePage.categoryName);
        await categoryPage.clickElement(await categoryPage.subcategoryName);
        await categoryPage.productName.scrollIntoView();
        await categoryPage.clickElement(await categoryPage.productName);
        await productPage.wishlistBtn.scrollIntoView();
        await productPage.clickElement(await productPage.wishlistBtn);
        await productPage.clickElement(await productPage.closeWishlistBtn);
        await productPage.mainPageBtn.scrollIntoView();
        await productPage.clickElement(await productPage.mainPageBtn);


        expect(await homePage.textAssertMainPage.getText()).to.be.equal('Subsidiary of seleniumframework.com');
    });
});