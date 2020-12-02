class Country_Popup {
  get submitButton() {
    return $("#country-modal-submit");
  }

  submitCountrySelection() {
    this.submitButton.waitForExist();
    this.submitButton.click();
  }
}

export default new Country_Popup();
