var data = require("../../TestData/TestData");

class GiftCradProduct_Page {

  get sizeselect (){
    return $('//*[@id="sizeSelector"]//li[1]//a');
   // return $("#sizeSelector > li.price-selection.selected > a");
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
    //return $('/html/body/div[2]/main/div[2]/div/div/div[5]/div[7]/button');
     //return $('//*[@id="add-to-cart"]');
     //return $("#addToCartButton");

     return $ ("div>[id =addToCartButton]");
  }

    SelectGiftcardAmount () {
      this.sizeselect.waitForExist();
      this.sizeselect.click();
    }
    enterUserdetails () {
      this.recipentname.scrollIntoView();
      this.recipentname.setValue(data.RegisterUserFirstName);
      this.Recipentemail.setValue(data.GiftcarduserEmailid);
      this.sendername.setValue(data.RegisterUserFirstName);
      browser.pause(10000);
      this.recipentconformeemail.setValue(data.GiftcarduserEmailid);
      this.Giftcardmessage.setValue('Buy the Gift card');
      this.AddtoBagButton.waitForDisplayed();      
      this.AddtoBagButton.click();
     
     
     browser.pause(10000);
   
    }
  }
  export default new GiftCradProduct_Page();
  