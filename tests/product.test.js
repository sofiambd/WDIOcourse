import { expect } from 'chai';
import categoryPage from '../pages/category.page';
import homePage from '../pages/home.page';
import productPage from '../pages/product.page';
import shoppingCart from '../pages/shopping.cart';

describe('MyStore', () => {
    it('Debería seleccionar un producto de varias categorías y agregarlos al carrito', async () => {

        await homePage.open('/');
        await homePage.clickElement(await homePage.categoryName);
        await categoryPage.clickElement(await categoryPage.subcategoryName);
        await categoryPage.productName.scrollIntoView();
        await categoryPage.clickElement(await categoryPage.productName);
        await productPage.productAddToCart.scrollIntoView();
        await (await productPage.productAddToCart).click();
        await productPage.mainPageBtn.scrollIntoView();
        await productPage.clickElement(await productPage.mainPageBtn);
        await homePage.goToCheckOut();
        await shoppingCart.deleteProductFromCart();
        await shoppingCart.alertMessage.waitForDisplayed( { timeout:5000 } );
        expect(await shoppingCart.alertMessage.getText()).to.be.equal('Your shopping cart is empty.');
        await shoppingCart.clickElement(await shoppingCart.mainPageBtn);

    });
    


});