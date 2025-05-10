class InventoryPage {
    elements = {
    
      ddlProductSort: () => cy.get('.product_sort_container'),                              
      productList:()=> cy.get('button[class="btn btn_primary btn_small btn_inventory "]'),
      shoppingCart:()=>cy.get('a[class="shopping_cart_link"]'),
      pricelist:()=>cy.get('.inventory_item_price')

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

    getAllthePrice():void{
      var list=this.elements.pricelist();
      console.log(list);
    }

  }
  
  export default new InventoryPage();