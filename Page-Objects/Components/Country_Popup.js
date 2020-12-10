class Country_Popup {
  get submitButton() {return $("#country-modal-submit")}
  
  submitCountrySelection() {
    this.submitButton.waitForExist();
    this.submitButton.click();
  }
}
//locatoremodule.exports = new Country_Popup();
export default new Country_Popup();
