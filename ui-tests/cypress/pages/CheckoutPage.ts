class CheckoutPage{
elements={
    txtFirstName:()=>cy.get('[id="first-name"]'),
    txtLastName:()=>cy.get('[id="last-name"]'),
    txtPostalCode:()=>cy.get('[id="postal-code"]'),
    btnContinue:()=>cy.get('[id="continue"]'),
    btnFinish:()=>cy.get('[id="finish"]'),
    suscessfulMessage:()=>cy.get('h2[data-test="complete-header"]'),
    selectedProduct:()=>cy.get('[data-test="inventory-item-name"]')
    
};



clickContinueButton():void{
    this.elements.btnContinue().click();
}

clickFinishButton():void{
    this.elements.btnFinish().click();
}

VerifyProductOrderSuccessful(message: string):void{
    this.elements.suscessfulMessage().should('contain',message)
}

fillUserInformation(firstName:string, lastname:string, postcode:string):void{
    this.elements.txtFirstName().type(firstName);
    this.elements.txtLastName().type(lastname);
    this.elements.txtPostalCode().type(postcode);
}

verifySelectedProducts(expectedLowestPricedProduct:string, expectedHighestPricedProduct:string):void{
     this.elements.selectedProduct().eq(0).should('have.text',expectedLowestPricedProduct);
     this.elements.selectedProduct().eq(1).should('have.text',expectedHighestPricedProduct);
    
     
}

}


export default new CheckoutPage();