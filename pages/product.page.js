import BasePage from '../pages/base.page';

class ProductPage extends BasePage {

  //WebElements
  get productAddToCart(){ return $('button.exclusive'); }

  get proceedCheckOut() { return $('[title = "Proceed to checkout"]'); }
  
  get closeWishlistBtn() { return $('[title="Close"]'); }

  get messageAddedWishlist() { return $('.fancybox-error'); }

  get accountBtn() { return $('.account'); }

  get wishlistBtn() { return $('#wishlist_button'); }

  get productName() { return $('[itemprop="name"]');}

  get closeBtn() { return $('[title="Close window"]');}

  get mainPageBtn() { return $('[alt = "My Store"]'); }

  get productWishlist() { return $('.fancybox-error'); }

}
export default new ProductPage();