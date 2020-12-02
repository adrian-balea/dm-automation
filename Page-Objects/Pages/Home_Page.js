
class Home_Page {
	get title() {
		return $('.span8 > h3')
	}



	clickOnPayBills() {
		// this.payBillsLink.waitForExist()
		// this.payBillsLink.click()
		// browser.waitAndclick(this.payBillsLink)
	}
}

export default new Home_Page ()
