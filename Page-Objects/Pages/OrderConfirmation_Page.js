class OrderConfirmation_Page {
 // get thankYouText() { return $(".checkout-title"); }
  get thankYouText (){return $('//div[@class="checkout-success__body__headline-box"]//span["Confirmation"][2]');}
  verifyThankYouText() {
    expect(this.thankYouText).toHaveText("THANK YOU FOR YOUR ORDER");
  }
}

export default new OrderConfirmation_Page();
