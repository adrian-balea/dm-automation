import Home_Page from "../Page-Objects/Pages/Home_Page";
import Product_Page from "../Page-Objects/Pages/Product_Page";
import Country_Popup from "../Page-Objects/Components/Country_Popup";
import Header from "../Page-Objects/Components/Header";
import ProductListing_Page from "../Page-Objects/Pages/ProductListing_Page";
import Bag_Page from "../Page-Objects/Pages/Bag_Page";
import LoginCheckout_Page from "../Page-Objects/Pages/LoginCheckout_Page";
import ShippingAndBilling_Page from "../Page-Objects/Pages/ShippingAndBilling_Page";
import Payment_Page from "../Page-Objects/Pages/Payment_Page";
import OrderConfirmation_Page from "../Page-Objects/Pages/OrderConfirmation_Page";
//var data = require("../../TestData/TestData");
describe("Place order as Guest user using credit Card", () => {
  beforeEach(() => {
    Home_Page.open();
    Country_Popup.submitCountrySelection();
    Header.navigateToMenBoots();
    ProductListing_Page.clickOnProductTile();
    Product_Page.selectProductSize();
    Product_Page.clickOnAddToCart();
    Product_Page.clickOnCheckoutButton();
    Bag_Page.clickOnCheckoutButton();
    LoginCheckout_Page.clickOnGuestCheckout();
    ShippingAndBilling_Page.enterNewAddressAsGuest();
  });

  afterEach(() => {
    browser.reloadSession();
  });

     it("Places order as guest using credit card", () => {
       Payment_Page.placeOrderUsingCreditCard();
       OrderConfirmation_Page.verifyThankYouText();
     });

      it("Places order as guest using Paypal", () => {
        Payment_Page.placeOrderUsingPaypal();
        OrderConfirmation_Page.verifyThankYouText();
      });

      it("Places order as guest using klarna", () => {
        Payment_Page.placeOrderUsingklarna();
        OrderConfirmation_Page.verifyThankYouText();
      });
});
