import Home_Page from "../Page-Objects/Pages/Home_Page";
import Product_Page from "../Page-Objects/Pages/Product_Page";
import Country_Popup from "../Page-Objects/Components/Country_Popup";
import Header from "../Page-Objects/Components/Header";
import ProductListing_Page from "../Page-Objects/Pages/ProductListing_Page";

describe("Place order as Guest user using credit Card", () => {
  it("Select the country", () => {
    Home_Page.open("https://p3.stage6.dm.projecta.com/us/en");
    Country_Popup.submitCountrySelection();
  });

  it("Select the product", () => {
    Header.navigateToMenBoots();
    ProductListing_Page.clickOnProductTile();
  });

  it("Verify the PDP page and addto bag", () => {
    Product_Page.clickOnProductSize();
    const addtocard = $("#addToCartButton");
    addtocard.waitForExist();
    addtocard.click();
    // const checkoutbn = $('a=Checkout')
    const checkoutbn = $(".add-to-cart-button");
    checkoutbn.waitForExist();
    checkoutbn.click();
  });
  it("Verify the My Bag to bag page", () => {
    const mybag = $("h1.cart-headline");
    // console.log(mybag.getText())
    const chekbtn = $('button[data-qa-automation ="cart-checkout-button"]');
    chekbtn.waitForExist();
    // chekbtn.scrollIntoView()
    chekbtn.click();
  });

  it("Checkout a with Guest user details", () => {
    // guest user btn code
    const checkoutguestBtn = $("#guestForm > div:nth-child(2) > button");
    checkoutguestBtn.waitForExist();
    checkoutguestBtn.click();
  });

  it("shipping & billing details for Guest user", () => {
    const input = $("#contact-email");
    input.waitForExist();
    input.setValue("martentesting@gmail.com");
    const loginchb = $(
      '//*[@id="shippingAddressForm"]//*[@id="address.firstName"]'
    );
    loginchb.setValue("testravi");

    const uselastname = $(
      '//*[@id="shippingAddressForm"]//*[@id="address.surname"]'
    );
    uselastname.setValue("kumar");

    const useaddress = $(
      '//*[@id="shippingAddressForm"]//*[@id="loqateAdressSearchTxt"]'
    );
    useaddress.setValue("test");

    ///////  select the dropdown value ///////////
    const valuedrop = $(
      "#shipping-i18n-address-form > section.loqate-address.js-loqate-address.active > div.form-group.loqate-form > div.loqate-search-options > div.address-list > div:nth-child(1) > div > span.txt"
    );
    valuedrop.waitForExist();
    valuedrop.click();

    const userphone = $(
      '//*[@id="shippingAddressForm"]//*[@id="address.phone"]'
    );
    userphone.setValue("12345678911");
    const conttopaybtn = $("#addressSubmit");
    conttopaybtn.scrollIntoView();
    conttopaybtn.click();
  });

  it("Review and payment page details for Guest user", () => {
    $("#addressPull").waitForExist();
    const selectpaymethod = $(
      "#adyen-encrypted-form > div > div.chckt-pm.chckt-pm-card.js-chckt-pm.js-chckt-pm__pm-holder > div.chckt-pm__header.js-chckt-pm__header"
    );
    selectpaymethod.waitForExist();
    selectpaymethod.scrollIntoView();
    selectpaymethod.click();
    browser.switchToFrame(0);
    const creditcardno = $("#encryptedCardNumber");
    creditcardno.setValue("4444333322221111");

    browser.switchToParentFrame();
    browser.switchToFrame(1);
    const creditdate = $("#encryptedExpiryDate");
    creditdate.scrollIntoView();
    creditdate.setValue("03/30");

    browser.switchToParentFrame();
    browser.switchToFrame(2);
    const creditcvv = $("div>[id =encryptedSecurityCode]");
    creditcvv.setValue("737");

    browser.switchToParentFrame();
    const cardholdername = $(
      "#card-div > div > div > div.adyen-checkout__loading-input__form._1jpVsksYS5faJOp2y0Tpl4 > div.adyen-checkout__field.adyen-checkout__card__holderName > label > span.adyen-checkout__input-wrapper > input"
    );
    cardholdername.scrollIntoView();
    cardholdername.setValue("cardnameravi");

    const paymentbtn = $(
      "body > div.js-device-info > main > div > div.container.checkout-container.checkout-roving > div.col-xs-12.col-sm-5.col-md-7 > div.adyen-pay-button__wrapper"
    );
    paymentbtn.scrollIntoView();
    paymentbtn.click();
  });

  it("Verify the order details", () => {
    $(".checkout-title").waitForExist();
    const ThankYou_text = $(".checkout-title");
    expect(ThankYou_text).toHaveText("Thank you for your Order!");
  });
});
