class Product_Page {
  // Selectors
  get selecttab() {
    return $('//div[@class="size-title"]//a[1]');
  }

  get addToCartButton() {
    return $("#addToCartButton");
  }
  get checkoutButton() {
    return $("a=Checkout");
  }

  get productSize() {
    // For US
    // return $('//*[@id="sizeSelector"]//li//a[@data-sku-code ="800090828511"]');

    // For UK P3 Stage6
    return $('//*[@id="sizeSelector"]//li//a[@data-sku-code ="190665311945"]');

    // For UK P2 Srage6
    // return $('//*[@id="sizeSelector"]//li//a[@data-sku-code ="883985693289"]');
  }

  get selecttab() {
    return $('//div[@class="size-title"]//a[1]');
  }
  get productSize() {
    return $('//*[@id="sizeSelector"]//li[2]//a');
  }
  get addToCartButton() {
    return $("#addToCartButton");
  }
  get checkoutButton() {
    return $("a=Checkout");
  }

  // Methods
  selectsizegudetab() {
    this.selecttab.waitForExist();
    this.selecttab.click();
  }

  selectProductSize() {
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
