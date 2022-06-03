import BasePage from '../pages/base.page';

class ShoppingCart extends BasePage {

  //WebElements

  get deleteProduct(){ return $('.icon-trash'); }

  get alertMessage(){ return $('.alert-warning'); }

  get mainPageBtn() { return $('[alt = "My Store"]'); }
  
  get productTtl() { return $('.cart_description').$('.product-name').$('a'); }
}

export default new ShoppingCart();