import { config } from "../../wdio.conf";
import Base_Page from "../Components/Base_Page";
var data = require("../../TestData/TestData");

class Home_Page extends Base_Page {
  // Selectors
  get selectsignlink() {
    return $("//li[@class='liOffcanvas']//a");
  }
  //Methods
  open(path) {
    super.open(data.applicationURL);
  }

  clicksignlink() {
    this.selectsignlink.waitForDisplayed();
    this.selectsignlink.click();
  }
}

export default new Home_Page();
