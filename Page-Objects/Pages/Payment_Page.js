var config = require("../../TestData/TestData");

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
    return $(
      "#adyen-encrypted-form > div > div.chckt-pm.chckt-pm-card.js-chckt-pm.js-chckt-pm__pm-holder > div.chckt-pm__header.js-chckt-pm__header"
    );
  }

  get creditCardNumberField() {
    return $("#encryptedCardNumber");
  }
  get creditCardExpiryDate() {
    return $("#encryptedExpiryDate");
  }
  get creditCardCVV() {
    return $("div>[id =encryptedSecurityCode]");
  }
  get cardHolderName() {
    return $(
      "#card-div > div > div > div.adyen-checkout__loading-input__form._1jpVsksYS5faJOp2y0Tpl4 > div.adyen-checkout__field.adyen-checkout__card__holderName > label > span.adyen-checkout__input-wrapper > input"
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

  get acceptPaypalCookiesLink() {return $("#acceptAllButton");
  }

  get paypalSubmitButton() { return $("#payment-submit-btn");  }
  
    

  placeOrderUsingCreditCard() {
    this.editShippingAddressLink.waitForExist();
    this.creditCardOption.waitForExist();
    this.creditCardOption.scrollIntoView();
    this.creditCardOption.click();
    browser.switchToParentFrame();
    browser.switchToFrame(0);
    this.creditCardNumberField.waitForExist();
    this.creditCardNumberField.setValue(config.creditCardNumber);
    browser.switchToParentFrame();
    browser.switchToFrame(1);
    this.creditCardExpiryDate.setValue(config.creditCardExpiryDate);
    browser.switchToParentFrame();
    browser.switchToFrame(2);
    this.creditCardCVV.setValue(config.creditCardCVV);
    browser.switchToParentFrame();
    this.cardHolderName.setValue(config.cardHolderName);
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
    browser.switchWindow(config.payPalURL);
    this.paypalEmail.waitForExist();
    this.paypalEmail.clearValue();
    this.paypalEmail.setValue(config.payPallUserEmail);
    this.paypalPassword.setValue(config.payPallUserPassword);
    this.paypalLoginButton.click();
    browser.pause(10000);
    /// paypal cokies //////////
    var cookies = this.acceptPaypalCookiesLink.getText();
     if (cookies == "Accept Cookies"){
    this.acceptPaypalCookiesLink.waitForExist();
    this.acceptPaypalCookiesLink.click();
    } 
    this.paypalSubmitButton.waitForExist();
    this.paypalSubmitButton.scrollIntoView();
    this.paypalSubmitButton.click();
    browser.switchToWindow(parentGUID);
    browser.pause(10000);
  }
}
export default new Payment_Page();
