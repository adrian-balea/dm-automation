class Header{

    get menBootsLink() {
        return $("#dm-primary-nav > li:nth-child(3)")
    }

    navigateToMenBoots(){
        this.menBootsLink.waitForExist()
        this.menBootsLink.click()
    }
        
}

export default new Header()