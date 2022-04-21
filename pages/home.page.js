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
  get textAssertMainPage() { return $('#editorial_image_legend'); }
  get imageProduct() { return $('#blockbestsellers').$('[alt="Printed Chiffon Dress"]'); }
  get bestSellerAlert() { return $('.alert-info'); }
  get bestSellerProduct() { return $('#blockbestsellers').$('.right-block').$('[title="Printed Chiffon Dress"]'); }



    async goToCheckOut(){
      addStep('Go to the Shopping Cart.');
      await super.clickElement(await this.proceedToCheckout);
    }

    async goToContactUs(){
      addStep('Go to the Contact Us page.');
      await super.clickElement(await this.contactUs);
    }


}

export default new HomePage();