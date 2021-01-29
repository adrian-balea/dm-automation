var data = require("../../TestData/TestData");

class Payment_Page {
  get editShippingAddressLinks() {
    return $("#addressPull");
  }
  get editShippingAddressLink() {
    return $("#addressPull");
  }

  get editShippingAddressLink() {
    return $("#addressPull");
  }
  get editShippingAddressLink() {
    return $("#addressPull");
  }

  get creditCardOption() {
    return $("#adyen-encrypted-form > div > div.chckt-pm.chckt-pm-card.js-chckt-pm.js-chckt-pm__pm-holder > div.chckt-pm__header.js-chckt-pm__header"
    );
  }

  get creditCardNumberField() {
   // return $("#encryptedCardNumber");
    return $("div>[id =encryptedCardNumber]");  // changed by 29012021
  }
  get creditCardExpiryDate() {
    return $("#encryptedExpiryDate");
  }
  get creditCardCVV() {
    return $("div>[id =encryptedSecurityCode]");
  }
  get cardHolderName() {
    return $("#card-div > div > div > div.adyen-checkout__loading-input__form._1jpVsksYS5faJOp2y0Tpl4 > div.adyen-checkout__field.adyen-checkout__card__holderName > label > span.adyen-checkout__input-wrapper > input"
    );
  }
  get placeOrderButton() {
    return $(
      "body > div.js-device-info > main > div > div.container.checkout-container.checkout-roving > div.col-xs-12.col-sm-5.col-md-7 > div.adyen-pay-button__wrapper"
    );
  }

  get payPalOption() {
    return $("[data-pm='paypal']");
  }

  get payPalButton() {
    return $("#paypal-container");
  }

  get paypalEmail() {
    return $("#email");
  }

  get paypalPassword() {
    return $("#password");
  }

  get paypalLoginButton() {
    return $("#btnLogin");
  }

  get acceptPaypalCookiesLink() {
    return $("#acceptAllButton");
  }

  get paypalSubmitButton() {
    return $("#payment-submit-btn");
  }

  get klranaoption() {
    return $("[data-pm='klarna']");
  }
  get klranaPlaceOrder() {
    return $("#adyen-pay-button-klarna");
  }
  get cookiesaAccepta() {
    return $('//*[@id="onetrust-accept-btn-handler"]');
  }

  get klarnaFrame() {
    return $('iframe[name="klarna-pay-later-main"]');
  }

  get klarnaInvoiceAgeRestriction() {
    return $("#invoice-age-restriction");
  }

  placeOrderUsingCreditCard() {
    this.editShippingAddressLink.waitForExist();
    this.creditCardOption.waitForExist();
    this.creditCardOption.scrollIntoView();
    this.creditCardOption.click();
    browser.pause(1000);
    browser.switchToParentFrame();
    browser.switchToFrame(0);
    this.creditCardNumberField.waitForExist();
    this.creditCardNumberField.click();
    this.creditCardNumberField.setValue(data.creditCardNumber);
    browser.switchToParentFrame();
    browser.switchToFrame(1);
    this.creditCardExpiryDate.setValue(data.creditCardExpiryDate);
    browser.switchToParentFrame();
    browser.switchToFrame(2);
    this.creditCardCVV.setValue(data.creditCardCVV);
    browser.switchToParentFrame();
    this.cardHolderName.setValue(data.cardHolderName);
    this.placeOrderButton.scrollIntoView();
    this.placeOrderButton.click();
  }

  placeOrderUsingPaypal() {
    this.payPalOption.waitForExist();
    this.payPalOption.scrollIntoView();
    this.payPalOption.click();
    this.payPalButton.waitForExist();
    this.payPalButton.scrollIntoView();
    this.payPalButton.click();
    browser.pause(10000);
    ///////// handel the windows /////////
    var parentGUID = browser.getWindowHandle();
    browser.switchWindow(data.payPalURL);
    this.paypalEmail.waitForExist();
    this.paypalEmail.clearValue();
    this.paypalEmail.setValue(data.payPallUserEmail);
    this.paypalPassword.setValue(data.payPallUserPassword);
    this.paypalLoginButton.click();
    browser.pause(10000);
    /// Handel paypal cokies //////////
    var cookies = this.acceptPaypalCookiesLink.getText();
    if (cookies == "Accept Cookies") {
      this.acceptPaypalCookiesLink.waitForExist();
      this.acceptPaypalCookiesLink.click();
    }
    this.paypalSubmitButton.waitForExist();
    this.paypalSubmitButton.scrollIntoView();
    this.paypalSubmitButton.click();
    browser.switchToWindow(parentGUID);
    browser.pause(10000);
  }

  placeOrderUsingklarna() {
   this.klranaoption.waitForExist();
    this.klranaoption.scrollIntoView();
    this.klranaoption.click();
    
  ////////////  changed  ******** The frame and cockoies popup has removed ******* 29012021 *************/////////////////////
    this.klarnaFrame.waitForExist();
    browser.switchToFrame(this.klarnaFrame);
    this.klarnaInvoiceAgeRestriction.waitForExist();
    browser.switchToParentFrame();
    this.klranaPlaceOrder.waitForExist();
    var cookies = this.cookiesaAccepta.getText();
    if (cookies == "Accept All Cookies") {
    this.cookiesaAccepta.waitForExist();
    this.cookiesaAccepta.click();
     }
 /////////////////////////******************* /////////////////////

    this.klranaPlaceOrder.scrollIntoView();
    this.klranaPlaceOrder.click();
  }
}
export default new Payment_Page();
