import Home_Page from "../Page-Objects/Pages/Home_Page";
import Product_Page from "../Page-Objects/Pages/Product_Page";
import Country_Popup from "../Page-Objects/Components/Country_Popup";
import GiftCardBuy_Page from "../Page-Objects/Pages/GiftCard_Page";
import GiftCardProduct_Page from "../Page-Objects/Pages/GiftCardProduct_Page";
import Footer from "../Page-Objects/Components/Footer";
import Bag_Page from "../Page-Objects/Pages/Bag_Page";
import LoginCheckout_Page from "../Page-Objects/Pages/LoginCheckout_Page";
import ShippingAndBilling_Page from "../Page-Objects/Pages/ShippingAndBilling_Page";
import Payment_Page from "../Page-Objects/Pages/Payment_Page";
import OrderConfirmation_Page from "../Page-Objects/Pages/OrderConfirmation_Page";

//var data = require("../../TestData/TestData");
describe("Places Gift card order as guest using credit card", function () {
  it('Buy the Gift Card', function() {  
    Home_Page.open();
    Country_Popup.submitCountrySelection();
    Footer.Selectgiftcard();
    GiftCardBuy_Page.clickOnGiftCardBuyButton();
    GiftCardProduct_Page.SelectGiftcardAmount();
    GiftCardProduct_Page.enterUserdetails();
    
    // Need to add the flow as per requirement//////////
    //  Product_Page.clickOnAddToCart();
    //Product_Page.clickOnAddToCart();
    //Product_Page.clickOnCheckoutButton();
    Bag_Page.clickOnCheckoutButton();
    LoginCheckout_Page.clickOnGuestCheckout();
    ShippingAndBilling_Page.enterNewAddressAsGuest();
 
  });

    });