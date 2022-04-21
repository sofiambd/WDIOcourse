import BasePage from '../pages/base.page';

class ContactUs extends BasePage {

  //WebElements
  get subjectHeading(){ return $('#id_contact'); }
  get productName(){ return $('[alt = "Faded Short Sleeve T-shirts"]'); }
  get addToWishlist(){ return $('#wishlist_button'); }
  get emailForm(){ return $('#email'); }
  get orderReference(){ return $('#id_order'); }
  get messageForm(){ return $('#message'); }
  get sendBtn() { return $('#submitMessage'); }
  get contactUsAssert() { return $('.navigation_page'); }
  get contactForm() { return $('.contact-form-box')}
  get mainPageBtn() { return $('[alt = "My Store"]'); }


}
export default new ContactUs();