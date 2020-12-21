class ProductListing_Page {
  get productTile() {
    // For US
    // return $('a[sid="11822006"]');

    //For UK P3 Stage6
    return $('a[sid="25637001"]');

    // Fro UK P2 Stage6
    // return $('a[sid="15382601"]');
  }

  clickOnProductTile() {
    this.productTile.waitForExist();
    this.productTile.click();
  }
}

export default new ProductListing_Page();
