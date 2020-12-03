class LoginCheckout_Page {
  get checoutAsGuestButton() {
    return $("#guestForm > div:nth-child(2) > button");
  }

  clickOnGuestCheckout() {
    this.checoutAsGuestButton.waitForExist();
    this.checoutAsGuestButton.click();
  }
}
export default new LoginCheckout_Page();
