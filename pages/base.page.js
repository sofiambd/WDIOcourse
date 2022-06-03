const PAGE_TIMEOUT = 10000
 export default class BasePage {

    /**
     * Abre el url en el navegador.
     * @param {String} url a acceder.
     */

   async open(url) {
       await browser.url(`${url}`);
   }

   /**
    * Clickea en un elemento.
    * @param {Object} element al cual se le hace click. 
    */

   async clickElement(element) {
       await element.click();
   }

   /**
    * Se desplaza hasta un elemento.
    * @param {Object} element al cual nos desplazamos.
    */

   async moveToElement(element) {
    const xlocationElement = await element.getLocation('x');
    const ylocationElement = await element.getLocation('y');
    await element.moveTo(xlocationElement,ylocationElement);
   }

   /**
    * Espera a que un elemento se muestre.
    * @param {Object} element al cual esperamos.
    */

   async waitUntilElementisDisplayed(element) {
    await browser.waitUntil(
      async () => (await element.isDisplayed()) === true,
      {
          timeout: 5000,
          timeoutMsg: 'expected to be Displayed after 5s'
       });
    }
 }
