class Product_Page {
  // Selectors
  get productSize() {
    return $('//*[@id="sizeSelector"]//li//a[@data-sku-code ="800090828511"]');
  }

  // Methods
  clickOnProductSize() {
    this.productSize.waitForExist();
    this.productSize.click();
  }
}

export default new Product_Page();
