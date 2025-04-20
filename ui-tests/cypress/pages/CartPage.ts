class CartPage{
    elements={
    lnkCartPage: ()=>cy.get('div[id="shopping_cart_container"]'),
    btnCheckOut: ()=> cy.get('button[id="checkout"]')
    };

    gotoMyCart():void{
        this.elements.lnkCartPage().click();
    }

    clickCheckout():void{
        this.elements.btnCheckOut().click();
    }
}

export default new CartPage();