class Payment_Page {
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
}
export default new Payment_Page();
