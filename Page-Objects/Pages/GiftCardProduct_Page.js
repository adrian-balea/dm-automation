var data = require("../../TestData/TestData");

class GiftCradProduct_Page {

  get sizeselect (){
    return $('//*[@id="sizeSelector"]//li[1]//a');
  }
    get recipentname() {
      return $('//*[@id="recipient_name"]');
    }
  get Recipentemail(){
      return $('//*[@id="recipientemail"]');
  }

  get recipentconformeemail(){
      return $('//*[@id="confirm_recipient_email"]');
  }

  get sendername (){
    return $('//*[@id="sender_name"]');
  }
  get Giftcardmessage(){
    return $('//*[@id="giftcard_message"]');
  }

  get AddtoBagButton (){
    //return $('//*[@id="addToCartButton"]');
     //return $('//*[@id="add-to-cart"]');
     return $("#addToCartButton");
     //return $ ("div>[id =addToCartButton]");
  }

    SelectGiftcardAmount () {
      this.sizeselect.waitForExist();
      this.sizeselect.click();
    }
    enterUserdetails () {
      this.recipentname.scrollIntoView();
      this.recipentname.setValue(data.GiftcarduserEmailid);
      this.Recipentemail.setValue(data.GiftcarduserEmailid);
      this.recipentconformeemail.setValue(data.GiftcarduserEmailid);
      this.sendername.setValue(data.RegisterUserFirstName);
      this.Giftcardmessage.setValue('Buy the Gift card');
      browser.pause(2000);
      //this.AddtoBagButton.waitForDisplayed();
      this.AddtoBagButton.click();
    }
  }
  export default new GiftCradProduct_Page();
  