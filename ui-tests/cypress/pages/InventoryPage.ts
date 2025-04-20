class InventoryPage {
    elements = {
    
      ddlProductSort: () => cy.get('.product_sort_container'),                              
      productList:()=> cy.get('button[class="btn btn_primary btn_small btn_inventory "]'),
      shoppingCart:()=>cy.get('a[class="shopping_cart_link"]')
      

    };
  
  
    sortProductsByPrice(optiin:string):void {
      this.elements.ddlProductSort().select(optiin);
    }

    addFirstProductToCart():void{
      this.elements.productList().eq(0).click();

    }

    ProceedToCheckOut():void{
      this.elements.shoppingCart();
    } 

    
  }
  
  export default new InventoryPage();