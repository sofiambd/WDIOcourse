
import BasePage from '../pages/base.page';

class CategoryPage extends BasePage {

  //WebElements
  get subcategoryName(){ return $('li:nth-child(1) > h5 > a'); }
  get productName(){ return $('.right-block').$('[title="Faded Short Sleeve T-shirts"]'); }
  get addToWishlist(){ return $('#wishlist_button'); }

  

  async clickSubcategory() {
      addStep('Click en la subcategoría a seleccionar.');
      await super.clickElement(this.subcategoryName);
  }

   async clickProduct() {
       addStep('Click en el producto a comprar.');
       await super.clickElement(this.productName);
   }

}
export default new CategoryPage();