class GiftCrad_Page {

    get GiftcardBuyButton() {
      return $("//div[@class='button-glob--yellow dark--hover btn-block js-use-link']//a");
    }
  
    clickOnGiftCardBuyButton () {
      this.GiftcardBuyButton.waitForExist();
      this.GiftcardBuyButton.click();
    }
  }
  export default new GiftCrad_Page();
  