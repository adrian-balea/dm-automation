class ShippingAndBilling_Page {
  get emailField() {
    return $("#contact-email");
  }
  get firstNameField() {
    return $('//*[@id="shippingAddressForm"]//*[@id="address.firstName"]');
  }
  get lastNameField() {
    return $('//*[@id="shippingAddressForm"]//*[@id="address.surname"]');
  }
  get shippingAddressSearchField() {
    return $('//*[@id="shippingAddressForm"]//*[@id="loqateAdressSearchTxt"]');
  }
  get suggestedAddress() {
    return $(
      "#shipping-i18n-address-form > section.loqate-address.js-loqate-address.active > div.form-group.loqate-form > div.loqate-search-options > div.address-list > div:nth-child(1) > div > span.txt"
    );
  }

  get Selectvalue() {
    return $(
      '//*[@id="shipping-i18n-address-form"]//div[@class="address-desc"]//span[1]'
    );
  }

  get phoneNumberField() {
    return $('//*[@id="shippingAddressForm"]//*[@id="address.phone"]');
  }

  get continiueToPaymentButton() {
    return $("#addressSubmit");
  }

  enterNewAddressAsGuest() {
    this.emailField.waitForExist();
    this.emailField.setValue("ayatacommerce@mailinator.com");
    this.firstNameField.setValue("John");
    this.lastNameField.setValue("Smith");
    // this.shippingAddressSearchField.setValue("Test");
    this.shippingAddressSearchField.setValue("7 Deansgate");
    this.suggestedAddress.waitForExist();
    this.suggestedAddress.click();
    // this.phoneNumberField.setValue("12345678911");
    this.phoneNumberField.setValue("07771540640");
    this.continiueToPaymentButton.scrollIntoView();
    this.continiueToPaymentButton.click();
  }
}
export default new ShippingAndBilling_Page();
