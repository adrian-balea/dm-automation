import { config } from "../../wdio.conf";
import Base_Page from "../Components/Base_Page";
var data = require("../../TestData/TestData");

class Home_Page extends Base_Page {
  // Selectors
  
  //Methods
  open(path) {
    super.open(data.applicationURL);
  }
}

export default new Home_Page();
