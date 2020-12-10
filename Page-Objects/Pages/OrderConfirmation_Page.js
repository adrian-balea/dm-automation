class OrderConfirmation_Page {
  get thankYouText() {
    return $(".checkout-title");
  }
  verifyThankYouText() {
    expect(this.thankYouText).toHaveText("Thank you for your Order!");
  }
}

export default new OrderConfirmation_Page();