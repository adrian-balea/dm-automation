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
//import locatordata from "../TestData/locatorData";


describe("Place order as Guest user using credit Card or Paypal", () => {
  it("Navigates to the DM website", () => {
     browser.url('/')
		browser.maximizeWindow();
    Country_Popup.submitCountrySelection();
  });

  it("Selects the product", () => {
    Header.navigateToMenBoots();
    ProductListing_Page.clickOnProductTile();

  });

  it("Adds product to bag and proceeds to checkout", () => {
    Product_Page.selectsizegudetab();
    Product_Page.selectProductSize();
    Product_Page.clickOnAddToCart();
    Product_Page.clickOnCheckoutButton();
  });

  it("Navigates to checkout-login page", () => {
    Bag_Page.clickOnCheckoutButton();
  });

  it("Proceeds to Shipping & Billing page", () => {
    LoginCheckout_Page.clickOnGuestCheckout();
  });

  it("Enters shipping details for Guest user", () => {
    ShippingAndBilling_Page.enterNewAddressAsGuest();
  });

      it ("Places order with credit card", () => {
         Payment_Page.placeOrderUsingCreditCard();
     });

    // it ("Places order with PayPal", () => {
    //     Payment_Page.placeOrderUsingPaypal();
    //   });

  it("Verify the order details", () => {
    
     OrderConfirmation_Page.verifyThankYouText();
    
  });
});
