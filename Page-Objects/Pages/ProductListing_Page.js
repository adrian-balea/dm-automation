class ProductListing_Page {
  get productTile() {
    // For US
    // return $('a[sid="11822006"]');
    
    //For UK
    return $('a[sid="25637001"]');
  }

  clickOnProductTile() {
    this.productTile.waitForExist();
    this.productTile.click();
  }
}

export default new ProductListing_Page();
