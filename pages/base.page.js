const PAGE_TIMEOUT = 10000
 export default class BasePage {

   async open(url) {
       await browser.url(`${url}`);
   }

   async clickElement(category) {
       //await category.waitForClickable({ timeout: PAGE_TIMEOUT });
       await category.click();
   }


 }
