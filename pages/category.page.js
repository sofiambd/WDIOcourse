import BasePage from '../pages/base.page';

class CategoryPage extends BasePage {

  //WebElements

  get addToWishlist(){ return $('#wishlist_button'); }

  get categoryName() { return $('.category-name'); }

  /**
   * Devuelve el selector de una subcategoría acorde al titulo que se le ingrese.
   * @param {String} text titulo de la subcategoría.
   * @returns selectoy
   */

  async subcategory(text) {
    const selectorSubcategory = await $(`//h5/a[contains(text(), "${text}")]`);
    return selectorSubcategory;
  }

  /**
   * Devuelve selector de producto acorde a la título del elemento.
   * @param {String} name título del elemento.
   * @returns selector
   */
  
  async product(name) {
    const selectorProduct = await $('.right-block').$(`[title="${name}"]`);
    return selectorProduct;
  }

}
export default new CategoryPage();