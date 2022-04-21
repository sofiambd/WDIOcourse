import BasePage from '../pages/base.page';

class ShoppingCart extends BasePage {

  //WebElements
  get deleteProduct(){ return $('.icon-trash'); }
  get goToMainPageBtn(){ return $('[alt = "My Store"]'); }
  get alertMessage(){ return $('.alert-warning'); }
  get mainPageBtn() { return $('[alt = "My Store"]'); }

   

  async deleteProductFromCart(){
    await super.clickElement(await this.deleteProduct);
  }
  
  
}

export default new ShoppingCart();