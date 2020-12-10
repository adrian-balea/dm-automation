
locatoremodule.exports = {
 
///////////********* Header details***********//////// */
locatorHeadermenumain : '#dm-primary-nav > li:nth-child(3)',


//////***********######  PLP page locatore #########////// */
locatorProductselect : '//*[@id="product-list"]/div[1]/div/div[2]/a',
locatorproductimageid :'#img-11822006',

   ////////////  Home page locatore //////////
locatorcountrypopup : '#country-modal-submit',
   
    

/////////// ******//  Register user selection page //////////////**************/ */
 locatorregisteruername:'#j_username',
 locatorregisteruserpassword :'#j_password',
 locatorregisterbtn :'#loginForm > button',

//***/ #####  locatore for guest user shipping and billing page ########## /****** */
locatorGuseremail : '#contact-email',
locatorGusername : '//*[@id="shippingAddressForm"]//*[@id="address.firstName"]',
locatorGlastname : '//*[@id="shippingAddressForm"]//*[@id="address.surname"]',
locatorGuseraddress : '//*[@id="shippingAddressForm"]//*[@id="loqateAdressSearchTxt"]',
locatorGuseraddressvalue : '#shipping-i18n-address-form > section.loqate-address.js-loqate-address.active > div.form-group.loqate-form > div.loqate-search-options > div.address-list > div:nth-child(1) > div > span.txt',
locatorGuserphoneno : '//*[@id="shippingAddressForm"]//*[@id="address.phone"]',
locatorGuserbillingaddsbtn : '#addressSubmit',

//***/ ##### locatore for payment page  ########## /****** */

locatorpaymentpage : '#adyen-encrypted-form > div > div.chckt-pm.chckt-pm-card.js-chckt-pm.js-chckt-pm__pm-holder > div.chckt-pm__header.js-chckt-pm__header',
locatorpaymentcardno : '#encryptedCardNumber',
locatorpaymentcardexpdate : '#encryptedExpiryDate',
locatorpaymentcardcvvno : 'div>[id =encryptedSecurityCode]',
locatorpaymentcardholdername : '#card-div > div > div > div.adyen-checkout__loading-input__form._1jpVsksYS5faJOp2y0Tpl4 > div.adyen-checkout__field.adyen-checkout__card__holderName > label > span.adyen-checkout__input-wrapper > input',
locatorpaymentbtnname : 'body > div.js-device-info > main > div > div.container.checkout-container.checkout-roving > div.col-xs-12.col-sm-5.col-md-7 > div.adyen-pay-button__wrapper'

}