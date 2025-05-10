import { check, sleep } from 'k6';
import http from 'k6/http';
import { getAuthToken } from '../auth/auth.js';
import { createCart, addItemToCart } from '../cart/cart.js';
import { baseURL, product_Id } from '../../config/environment.js'; 



export function createOrderTest() {

  const authToken = getAuthToken(baseURL);
 
  // Create a cart
  const cartId = createCart(baseURL);
 
  // Add a random item to the cart
  const productId = product_Id; 
 
  addItemToCart(baseURL, cartId, productId);
  
  // Create an order
  const payload = JSON.stringify({
    cartId: cartId,
    customerName: "Helal Khan", 
    
  });
  
  const params = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`,
    },
  };
  
  const res = http.post(`${baseURL}/orders`, payload, params);
  
  // Validate response
  check(res, {
    'Order creation status is 201': (r) => r.status === 201,
  
  });
  console.log("Create Order Test : Respnse code "+res.status);

  sleep(1); // Add a small delay between iterations
};
