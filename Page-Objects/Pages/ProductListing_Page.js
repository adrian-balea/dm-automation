class ProductListing_Page {
  get productTile() {
    return $('a[sid="11822006"]');
  }

  clickOnProductTile() {
    this.productTile.waitForExist();
    this.productTile.click();
  }
}

export default new ProductListing_Page();
