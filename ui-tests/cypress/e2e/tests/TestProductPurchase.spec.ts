import LoginPage from '../../pages/LoginPage';
import StoredData  from '../../fixtures/storage.json';
import InventoryPage from '../../pages/InventoryPage';
import CartPage from '../../pages/CartPage';
import CheckOutPage from '../../pages/CheckoutPage';


describe('Verify lowest & highest priced product putchase', () => {
   
    before(() => {
        LoginPage.doLogin(StoredData.standard_user.username, StoredData.standard_user.password);
    });


  it('should add the lowest & highest priced products to cart then checkout', () => {
   
   //add the lowest & highest priced
   InventoryPage.sortProductsByPrice('Price (low to high)');
   InventoryPage.addFirstProductToCart(); // Add lowest priced product
   InventoryPage.sortProductsByPrice('Price (high to low)');
   InventoryPage.addFirstProductToCart(); // Add highest priced product
   //Checkout
   CartPage.gotoMyCart();
   CartPage.clickCheckout();
   CheckOutPage.fillUserInformation(StoredData.standard_user.fastname,
                                    StoredData.standard_user.lastname,
                                    StoredData.standard_user.postalcode);
   CheckOutPage.clickContinueButton();
   
   CheckOutPage.verifySelectedProducts(StoredData.products.lowestPricedProduct,StoredData.products.highestPricedProduct);
   CheckOutPage.clickFinishButton();
   CheckOutPage.VerifyProductOrderSuccessful('Thank you for your order!');
   
  
  });

  
 

  after(()=>{
    LoginPage.doLogOut();
  })

  
});