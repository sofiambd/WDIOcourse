import { expect } from 'chai';
import { DATA } from '../data/loginData.json';
import categoryPage from '../pages/category.page';
import homePage from '../pages/home.page';
import loginPage from '../pages/login.page';
import productPage from '../pages/product.page';

const userOne = DATA.userOne;
const userTwo = DATA.userTwo;
const arrayUsers = [userOne, userTwo];
const accountTxt = 'My account';
const categoryTtl = 'Women';
const subcategoryTtl = 'Tops';
const subcategoryTopsTtl = 'T-shirts';
const product = 'Faded Short Sleeve T-shirts';
const addedProductMsg = 'Added to your wishlist.';

describe('MyStore', () => {
  before('Ingresa a la página principal', async () => {
    await homePage.open('/');
    await homePage.waitUntilElementisDisplayed(await homePage.menuContent);
  });
  it('Debería seleccionar un producto y agregarlo a la WishList.', async () => {
    arrayUsers.forEach((users) => {
      addStep('Ingresa a Sign In y completa los datos para ingresar.');
      await homePage.clickElement(await homePage.signIn);
      await loginPage.emailForm.scrollIntoView();
      await loginPage.loginForm(users.email,users.password);
      expect(await loginPage.pageHeading.getText()).to.be.equal(accountTxt);
      addStep('Ingresa a una categoría y luego a una categoría.');
      await loginPage.clickElement(await loginPage.mainPageBtn);
      await homePage.clickElement(await homePage.categoryName);
      expect(await categoryPage.categoryName.getText()).to.be.equal(categoryTtl);
      await (await categoryPage.subcategory(subcategoryTtl)).scrollIntoView();
      addStep('Ingresa a una subcategoría.');
      await categoryPage.clickElement(await categoryPage.subcategory(subcategoryTtl));
      expect(await categoryPage.categoryName.getText()).to.be.equal(subcategoryTtl);
      await (await categoryPage.subcategory(subcategoryTopsTtl)).scrollIntoView();
      addStep('Ingresa a una subcategoría de Tops.');
      await categoryPage.clickElement(await categoryPage.subcategory(subcategoryTopsTtl));
      expect(await categoryPage.categoryName.getText()).to.be.equal(subcategoryTopsTtl);
      await (await categoryPage.product(product)).scrollIntoView();
      addStep('Ingresa a un producto y lo agrega a la wishlist.');
      await categoryPage.clickElement(await categoryPage.product(product));
      expect(await productPage.productName.getText()).to.be.equal(product);
      await productPage.wishlistBtn.scrollIntoView();
      await productPage.clickElement(await productPage.wishlistBtn);
      expect(await productPage.productWishlist.getText()).to.be.equal(addedProductMsg);
      await productPage.clickElement(await productPage.closeWishlistBtn);
      await productPage.mainPageBtn.scrollIntoView();
      addStep('Se dirige a la página principal y realiza el logout.');
      await productPage.clickElement(await productPage.mainPageBtn);
      await homePage.textAssertMainPage.scrollIntoView();
      expect(await homePage.textAssertMainPage.getText()).to.be.equal('POPULAR');
      await homePage.logoutBtn.scrollIntoView();
      await homePage.clickElement(await homePage.logoutBtn);
    });
  });
});
