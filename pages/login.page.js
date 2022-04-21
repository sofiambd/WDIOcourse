
import BasePage from '../pages/base.page';

class LoginPage extends BasePage {

  //WebElements
  get emailForm(){ return $('#email'); }
  get passwordForm() { return $('#passwd'); }
  get signInBtn(){ return $('#SubmitLogin'); }
  get autenticationTag(){ return $('.navigation_page'); }
  get mainPageBtn() { return $('[alt = "My Store"]'); }
  get pageHeading() { return $('.page-heading'); }


  

  async loginForm(email,password) {
      addStep('Llena el formulario de login.');
      await this.emailForm.setValue(email);
      await this.passwordForm.setValue(password);
      await super.clickElement(await this.signInBtn);

  }

}
export default new LoginPage();