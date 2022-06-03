import BasePage from '../pages/base.page';

class HomePage extends BasePage {

  //WebElements

  get categoryName(){ return $('li:first-child'); }

  get signIn(){ return $('a.login'); }

  get blockBestSeller(){ return $('[href="#blockbestsellers"]'); }

  get productElement(){ return $('.wishlistProd_1'); }

  get contactUs(){ return $('[title="Contact Us"]'); }

  get clickProductBtn(){ return $('#blockbestsellers').$('[data-id-product="7"]'); }

  get productName(){ return $('#layer_cart_product_title'); }

  get proceedToCheckout() { return $('[title="View my shopping cart"]'); }

  get textAssertMainPage() { return $('.active').$('.homefeatured'); }

  get bestSellerAlert() { return $('.alert-info'); }

  get menuContent() { return $('.sf-menu'); }

  get logoutBtn() { return $('.logout'); }

    /**
     * Devuelve selector del producto del block de Best Sellers acorde al titulo.
     * @param {String} ttlProduct titulo del producto
     * @returns Selector
     */

    async getProduct(ttlProduct){
      return $('#blockbestsellers').$('h5').$(`[title="${ttlProduct}"]`);
    }


}

export default new HomePage();