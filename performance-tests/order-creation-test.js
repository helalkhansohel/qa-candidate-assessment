import { check, sleep } from 'k6';
import http from 'k6/http';
import { getAuthToken } from './utils/auth.js';
import { createCart, addItemToCart } from './utils/cart.js';
import { baseURL, product_Id } from './Setup/setUp.js'; 
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";



// Test configuration
export const options = {
  scenarios: {
    ramp_up: {
      executor: 'ramping-vus',
      startVUs: 1,
      stages: [
        { duration: '3s', target: 1 }, // 30s -10
        { duration: '1s', target: 5 }, // 1m -50
        { duration: '3s', target: 1 }, // 30s - 100
      ],
      gracefulRampDown: '3s', //30s
      exec: 'rampUpScenario',
    },
    sustained: {
      executor: 'constant-vus',
      vus: 5, //50
      duration: '5s',// 5m
      exec: 'sustainedScenario',
      startTime: '3s',  //3m
    },
    spike: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '1s', target: 1 }, //1m - 200
        { duration: '1s', target: 1 }, //1m - 50
      ],
      gracefulRampDown: '3s', //30s
      exec: 'spikeScenario',
      startTime: '3s', //9m
    },
    soak: {
      executor: 'constant-vus',
      vus: 2, //20
      duration: '1s',//1h
      exec: 'soakScenario',
      startTime: '3s', //12m
    },
  },

};




// Scenario functions
export function rampUpScenario() {
 
  createOrderTest();
};

export function sustainedScenario() {
 
  createOrderTest();
};

export function spikeScenario() {
 
  createOrderTest();
};

export function soakScenario() {
 
  createOrderTest();
};

// Main test function
function createOrderTest() {
  let authToken = getAuthToken(baseURL);
 
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
    'Order creation time is acceptable': (r) => r.timings.duration < 10000, //1000
  });
  console.log("Product order sucessful : respnse code "+res.status);

  sleep(1); // Add a small delay between iterations
};

//html report
export function handleSummary(data) {
    return {
      "report/summary.html": htmlReport(data),
    };
  }