import Base_Page from "../Components/Base_Page";

class Home_Page extends Base_Page {
  // Selectors
  get title() {
    return $(".span8 > h3");
  }

  //Methods
  open(path) {
    super.open(path);
  }

  clickOnPayBills() {
    // this.payBillsLink.waitForExist()
    // this.payBillsLink.click()
    // browser.waitAndclick(this.payBillsLink)
  }
}

export default new Home_Page();
