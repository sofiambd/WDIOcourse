import { expect } from 'chai';
import homePage from '../pages/home.page';
import productPage from '../pages/product.page';
import shoppingCart from '../pages/shopping.cart';

describe('MyStore', () => {
    it('Debería seleccionar un producto de la categoría Best Seller', async () => {
        await homePage.open('/');
        await homePage.clickElement(await homePage.blockBestSeller);
        if (await homePage.bestSellerAlert.isExisting()){
            expect(await homePage.bestSellerAlert.getText()).to.be.equal('No best sellers at this time.');
        } else {
            await homePage.imageProduct.scrollIntoView();
            const xlocationElement = await homePage.imageProduct.getLocation('x');
            const ylocationElement = await homePage.imageProduct.getLocation('y');
            await homePage.imageProduct.moveTo(xlocationElement,ylocationElement);
            await homePage.clickElement(await homePage.bestSellerProduct);
            expect(await productPage.productName.getText()).to.be.equal('Printed Chiffon Dress');
            await productPage.productAddToCart.scrollIntoView();
            await (await productPage.productAddToCart).click();
            await productPage.mainPageBtn.scrollIntoView();
            await productPage.clickElement(await productPage.mainPageBtn);
            await homePage.goToCheckOut();
            await shoppingCart.deleteProductFromCart();
            await shoppingCart.alertMessage.waitForDisplayed( { timeout:5000 } );
            expect(await shoppingCart.alertMessage.getText()).to.be.equal('Your shopping cart is empty.');
            await shoppingCart.clickElement(await shoppingCart.mainPageBtn);
            await homePage.textAssertMainPage.scrollIntoView();
            expect(await homePage.textAssertMainPage.getText()).to.be.equal('Subsidiary of seleniumframework.com');

        }
        
        
    });
    
});