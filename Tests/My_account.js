import Home_Page from "../Page-Objects/Pages/Home_Page";
import Country_Popup from "../Page-Objects/Components/Country_Popup";
import Register_Page from "../Page-Objects/Pages/Register_Page";
import Header from "../Page-Objects/Components/Header";
//describe('Create the My account with details', fnction() {

   describe('Create the My account with details', function ()  {
      it('Select the Signup link', function() {				
      Home_Page.open();
      Country_Popup.submitCountrySelection();
      browser.pause(1000);
      Header.clicksignlink();
     // Home_Page.clicksignlink();
      Register_Page.EnterNewUserDetails();
   });
   });