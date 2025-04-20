import http from 'k6/http';

export function createCart(baseUrl) {
  const res = http.post(`${baseUrl}/carts`);
  
  if (res.status !== 201) {
    //console.error(`Failed to create the cart: ${res.body}`);
    console.error(`Failed to create the cart: Response`+res.status);
    
    return null;
  }
 console.log("Cart created sucessfully. Responss code: "+res.status);
  return JSON.parse(res.body).cartId;
}

export function addItemToCart(baseUrl, cartId, productId) {
  const payload = JSON.stringify({
    productId: productId
    
  });
  
  const params = {
    headers: { 'Content-Type': 'application/json' },
  };
  
  const res = http.post(`${baseUrl}/carts/${cartId}/items`, payload, params);
  
  if (res.status !== 201) {
   
   console.error(`Failed Trying URL: ${baseUrl}/carts/${cartId}/items`);
   
   
   
  }else{
    console.log("Product item added sucessfully. Responss code: "+res.status);
  }

  
  return res.status === 201;
}