var data = require("../../TestData/TestData");

class Register_Page {
  get RegisterFirstName() {
    return $('//*[@id="register.firstName"]');
  }

  get RegisterLastName() {
    return $('//*[@id="register.lastName"]');
  }

  get RegisterEmailAddress() {
    return $('//*[@id="register.email"]');
  }
  
  get RegisterUserPassword() {
    return $('//*[@id="password"]');
  }

  get RegisterUserConfPassword() {
    return $('//*[@id="register.checkPwd"]');
  }

  get RegisterCheckbox() {
    return $('//*[@id="registerForm"]/div[7]/label/span');
  }

  
  get RegisterButton() {
    return $("#registerForm > div.form-actions.clearfix > button");
  }

  get Signoutlink() {
    return $("//li[@class='liOffcanvas']//a");
  }


  EnterNewUserDetails() {
    this.RegisterFirstName.waitForDisplayed();
    this.RegisterFirstName.click();
    this.RegisterFirstName.setValue(data.RegisterUserFirstName);
    this.RegisterLastName.setValue(data.RegisterUserLastName);
    this.RegisterEmailAddress.setValue(data.RegisterUserEmail);
    this.RegisterUserPassword.setValue(data.RegisterUserPassword);
    this.RegisterCheckbox.scrollIntoView();
    this.RegisterUserConfPassword.setValue(data.RegisterUserPassword);
    this.RegisterCheckbox.click();
    this.RegisterButton.click();
    this.Signoutlink.waitForDisplayed();
    var Signoutlink = this.Signoutlink.getText();
    if (Signoutlink == "SIGN OUT") {
    console.log("User successfully Registered");    
     }
  }
}
export default new Register_Page();
