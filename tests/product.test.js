import { expect } from 'chai';
import categoryPage from '../pages/category.page';
import homePage from '../pages/home.page';
import productPage from '../pages/product.page';
import shoppingCart from '../pages/shopping.cart';

const subcategoryName = 'Tops';
const subcategoryTop = 'T-shirts';
const productName = 'Faded Short Sleeve T-shirts';
const categoryTtl = 'Women';

describe('MyStore', () => {
  before('Ingresa a la página principal', async () => {
    await homePage.open('/');
    await homePage.waitUntilElementisDisplayed(await homePage.menuContent);
  });
  it('Debería seleccionar un producto de varias categorías y agregarlos al carrito', async () => {
    addStep('Ingresa a una categoría.');
    await homePage.clickElement(await homePage.categoryName);
    expect(await categoryPage.categoryName.getText()).to.be.equal(categoryTtl);
    await (await categoryPage.subcategory(subcategoryName)).scrollIntoView();
    addStep('Ingresa a una subcategoría.');
    await categoryPage.clickElement(await categoryPage.subcategory(subcategoryName));
    expect(await categoryPage.categoryName.getText()).to.be.equal(subcategoryName);
    await (await categoryPage.subcategory(subcategoryTop)).scrollIntoView();
    addStep('Ingresa a una subcategoría de Tops.');
    await categoryPage.clickElement(await categoryPage.subcategory(subcategoryTop));
    expect(await categoryPage.categoryName.getText()).to.be.equal(subcategoryTop);
    await (await categoryPage.product(productName)).scrollIntoView();
    addStep('Ingresa a un producto y lo agrega al carrito.');
    await categoryPage.clickElement(await categoryPage.product(productName));
    expect(await shoppingCart.productTtl.getText()).to.be.equal(productName);
    await productPage.productAddToCart.scrollIntoView();
    await (await productPage.productAddToCart).click();
    await productPage.mainPageBtn.scrollIntoView();
    addStep('Se dirige a la página principal y va al Shopping Cart.');
    await productPage.clickElement(await productPage.mainPageBtn);
    await homePage.goToCheckOut();
    addStep('Elimina el producto del carrito.');
    await shoppingCart.clickElement(await shoppingCart.deleteProduct);
    await shoppingCart.alertMessage.waitForDisplayed( { timeout:5000 } );
    expect(await shoppingCart.alertMessage.getText()).to.be.equal('Your shopping cart is empty.');
    addStep('Se dirige a la página principal.');
    await shoppingCart.clickElement(await shoppingCart.mainPageBtn);
    await homePage.textAssertMainPage.scrollIntoView();
    expect(await homePage.textAssertMainPage.getText()).to.be.equal('POPULAR');
    });
});
