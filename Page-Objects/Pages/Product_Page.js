class Product_Page {
  // Selectors
<<<<<<< HEAD
      
  get selecttab() {return $('//div[@class="size-title"]//a[1]');}
  get productSize() {return $('//*[@id="sizeSelector"]//li[2]//a');}
  get addToCartButton() {return $("#addToCartButton");}
  get checkoutButton() {return $("a=Checkout");}

  
=======
  //get productSize() {
    //For US
    // return $('//*[@id="sizeSelector"]//li//a[@data-sku-code ="800090828511"]');

    //For UK
   // return $('//*[@id="sizeSelector"]//li//a[@data-sku-code ="190665311945"]');
 // }

  get selecttab() {return $('//div[@class="size-title"]//a[1]');}
  get productSize() {return $('//*[@id="sizeSelector"]//li[2]//a');}
  get addToCartButton() {return $("#addToCartButton");}
  get checkoutButton() {return $("a=Checkout");}
>>>>>>> 4196ff7beaa65067939005798b3e77701f2df6aa

  // Methods

   selectsizegudetab(){
    this.selecttab.waitForExist();
    this.selecttab.click();
   }
  selectProductSize() {
   // this.selectProductSize.
    this.productSize.waitForExist();
    this.productSize.click();
  }


  clickOnAddToCart() {
    this.addToCartButton.click();
  }

  clickOnCheckoutButton() {
    this.checkoutButton.waitForExist();
    this.checkoutButton.click();
  }
}

export default new Product_Page();
