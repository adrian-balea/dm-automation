class Product_Page {
  // Selectors
  get productSize() {
    return $('//*[@id="sizeSelector"]//li//a[@data-sku-code ="800090828511"]');
  }

  get addToCartButton() {
    return $("#addToCartButton");
  }

  get checkoutButton(){
    return $("a=Checkout")
  }

  // Methods
  selectProductSize() {
    this.productSize.waitForExist();
    this.productSize.click();
  }

  clickOnAddToCart(){
    this.addToCartButton.click()
  }

  clickOnCheckoutButton(){
    this.checkoutButton.waitForExist()
    this.checkoutButton.click()
  }
}

export default new Product_Page();
