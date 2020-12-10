class Payment_Page {
//<<<<<<< HEAD
    get editShippingAddressLinks() {return $("#addressPull");}
  get editShippingAddressLink() {return $("#addressPull"); }
//=======
    get editShippingAddressLink() {return $("#addressPull");}
  get editShippingAddressLink() {return $("#addressPull");
  }
//>>>>>>> 4196ff7beaa65067939005798b3e77701f2df6aa
  get creditCardOption() {return $("#adyen-encrypted-form > div > div.chckt-pm.chckt-pm-card.js-chckt-pm.js-chckt-pm__pm-holder > div.chckt-pm__header.js-chckt-pm__header"
    ); }
  
  get creditCardNumberField() {return $("#encryptedCardNumber");
  }
  get creditCardExpiryDate() {
    return $("#encryptedExpiryDate");
  }
  get creditCardCVV() {
    return $("div>[id =encryptedSecurityCode]");
  }
  get cardHolderName() { return $("#card-div > div > div > div.adyen-checkout__loading-input__form._1jpVsksYS5faJOp2y0Tpl4 > div.adyen-checkout__field.adyen-checkout__card__holderName > label > span.adyen-checkout__input-wrapper > input"
    );
  }
  get placeOrderButton() {return $("body > div.js-device-info > main > div > div.container.checkout-container.checkout-roving > div.col-xs-12.col-sm-5.col-md-7 > div.adyen-pay-button__wrapper"
    );
  }

//get payPalOption() {return $("[data-pm='paypal'] .js-chckt-pm__header]");
get payPalOption(){return $('//*[@id="adyen-encrypted-form"]//div[@class="chckt-pm chckt-pm-paypal js-chckt-pm "]//div[@class="chckt-pm__header js-chckt-pm__header"]');}
  

  get payPalButton() {return $("#paypal-container");
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
    return $("#acceptAllButton"); }

  get paypalSubmitButton() {
    return $("#payment-submit-btn");
  }

  placeOrderUsingCreditCard() {
    this.editShippingAddressLink.waitForExist();
    this.creditCardOption.waitForExist();
    this.creditCardOption.scrollIntoView();
    this.creditCardOption.click();
    browser.switchToParentFrame();
    browser.switchToFrame(0);
    this.creditCardNumberField.waitForExist();
    this.creditCardNumberField.setValue("4444333322221111");
    browser.switchToParentFrame();
    browser.switchToFrame(1);
    this.creditCardExpiryDate.setValue("03/30");
    browser.switchToParentFrame();
    browser.switchToFrame(2);
    this.creditCardCVV.setValue("737");
    browser.switchToParentFrame();
    this.cardHolderName.setValue("J Smith");
    this.placeOrderButton.scrollIntoView();
    this.placeOrderButton.click();
  }

  placeOrderUsingPaypal() {

    this.editShippingAddressLinks.waitForExist();
    this.editShippingAddressLink.waitForExist();
    this.payPalOption.waitForExist();
    this.payPalOption.scrollIntoView();
    this.payPalOption.click();
    this.payPalButton.waitForExist();
    this.payPalButton.scrollIntoView();
    this.payPalButton.click();
    var parentGUID = browser.getWindowHandle();
    console.log("Page title before Switching : "+ browser.getTitle());
		console.log("Total Windows : "+parentGUID.length);
    browser.switchWindow("www.sandbox.paypal.com/");
    this.paypalEmail.waitForExist();
    this.paypalEmail.clearValue();
    this.paypalEmail.setValue("sb-rnibz2253238@personal.example.com");
    this.paypalPassword.setValue("9Nja2.Ty");
    this.paypalLoginButton.click();
    this.paypalSubmitButton.waitForExist();
    this.paypalSubmitButton.scrollIntoView();
    this.paypalSubmitButton.click();
    browser.switchToWindow(parentGUID);
    console.log("Page title after switching back to Parent: "+ browser.getTitle());
    browser.switchWindow("www.sandbox.paypal.com/");
    this.paypalEmail.waitForExist();
    this.paypalEmail.clearValue();
    this.paypalEmail.setValue("sb-rnibz2253238@personal.example.com");
    this.paypalPassword.setValue("9Nja2.Ty");
    this.paypalLoginButton.click();
    //this.acceptPaypalCookiesLink().waitForExist();
   // this.acceptPaypalCookiesLink().click();
    this.paypalSubmitButton.waitForExist();
    this.paypalSubmitButton.scrollIntoView();
    this.paypalSubmitButton.click();
    browser.pause(5000);
    browser.switchWindow('default');
    browser.pause(10000);

  }
}
export default new Payment_Page();
