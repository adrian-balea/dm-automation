class Header{

    get menBootsLink() {return $("#dm-primary-nav > li:nth-child(3)")
    }

    get selectsignlink() {
        return $("//li[@class='liOffcanvas']//a");
      }

    navigateToMenBoots(){
        this.menBootsLink.waitForExist()
        this.menBootsLink.click()
    }
      
    clicksignlink() {
        this.selectsignlink.waitForDisplayed();
        this.selectsignlink.click();
      }
}

export default new Header()