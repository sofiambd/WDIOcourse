import { expect } from 'chai';

import homePage from '../pages/home.page';
import productPage from '../pages/product.page';
import shoppingCart from '../pages/shopping.cart';

const alertProducts = 'No best sellers at this time.';
const productName = 'Faded Short Sleeve T-shirts';

describe('MyStore', () => {
  before('Ingresa a la página principal', async () => {
    await homePage.open('/');
    await homePage.waitUntilElementisDisplayed(await homePage.menuContent);
  });
  it('Debería seleccionar un producto de la categoría Best Seller', async () => {
    addStep('Abre best sellers.');
    await homePage.clickElement(await homePage.blockBestSeller);
    addStep('En caso de que no haya productos en la sección, verifica el mensaje.');
    if (await homePage.bestSellerAlert.isExisting()){
      addStep('En caso de que no haya productos en la sección, verifica el mensaje.');
      expect(await homePage.bestSellerAlert.getText()).to.be.equal(alertProducts);
    } else {
      addStep('En caso de que haya productos en la sección, selecciona uno de los productos.');
      await homePage.bestSellerProduct.scrollIntoView();
      await homePage.moveToElement(await homePage.getProduct(productName));
      await homePage.clickElement(await homePage.getProduct(productName));
      expect(await productPage.productName.getText()).to.be.equal(productName);
      addStep('Agrega el producto seleccionado al carrito.');
      await productPage.productAddToCart.scrollIntoView();
      await (await productPage.productAddToCart).click();
      addStep('Se dirige a la página principal y va al Shopping Cart.');
      await productPage.mainPageBtn.scrollIntoView();
      await productPage.clickElement(await productPage.mainPageBtn);
      await homePage.goToCheckOut();
      expect(await shoppingCart.productTtl.getText()).to.be.equal(productName);
      addStep('Elimina el producto del carrito.');
      await shoppingCart.clickElement(await shoppingCart.deleteProduct);
      await shoppingCart.alertMessage.waitForDisplayed( { timeout:5000 } );
      expect(await shoppingCart.alertMessage.getText()).to.be.equal('Your shopping cart is empty.');
      addStep('Se dirige a la página principal.');
      await shoppingCart.clickElement(await shoppingCart.mainPageBtn);
      await homePage.textAssertMainPage.scrollIntoView();
      expect(await homePage.textAssertMainPage.getText()).to.be.equal('POPULAR');
    }  
  });
});
