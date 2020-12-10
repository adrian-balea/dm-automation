class Bag_Page {
  get checkoutButton() {
    return $('button[data-qa-automation ="cart-checkout-button"]');
  }

  clickOnCheckoutButton() {
    this.checkoutButton.waitForExist();
    this.checkoutButton.scrollIntoView();
    this.checkoutButton.waitForClickable();
    this.checkoutButton.click();
  }
}

export default new Bag_Page();
