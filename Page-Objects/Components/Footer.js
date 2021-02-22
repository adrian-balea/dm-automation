class Footer{

   //// // Selector //////
     
get giftcardlink(){
    return $("body > div.js-device-info > footer > div.footer__mid.clearfix > div:nth-child(2) > ul > li:nth-child(9) > a")
  }
  
/////Methods///////////
      
    Selectgiftcard(){
    this.giftcardlink.scrollIntoView();
    this.giftcardlink.click();
    }
  
}

export default new Footer()