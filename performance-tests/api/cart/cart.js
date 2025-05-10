import { check } from 'k6';
import http from 'k6/http';

export function createCart(baseUrl) {

  const res = http.post(`${baseUrl}/carts`);
  
  check(res, {
    'Cart creation status is 201': (r) => r.status === 201,
    'Cart ID exists': (r) => JSON.parse(r.body).cartId !== undefined,
  });
  console.log("create Cart: Respnse code "+res.status);
  return res.status === 201 ? JSON.parse(res.body).cartId : null;
 
}

export function addItemToCart(baseUrl, cartId, productId) {
  const payload = JSON.stringify({
    productId: productId
    
  });
  
  const params = {
    headers: { 'Content-Type': 'application/json' },
  };
  
  const res = http.post(`${baseUrl}/carts/${cartId}/items`, payload, params);
  
  check(res, {
    'Add item status is 201': (r) => r.status === 201,
  });
   
  console.log("add Item To Cart: Respnse code "+res.status);
}