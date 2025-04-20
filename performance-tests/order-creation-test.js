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
        { duration: '5s', target: 5 }, 
        { duration: '10s', target: 10 }, 
        { duration: '5s', target: 1 }, 
      ],
      gracefulRampDown: '5s', 
      exec: 'rampUpScenario',
    },
    sustained: {
      executor: 'constant-vus',
      vus: 5, 
      duration: '15s',
      exec: 'sustainedScenario',
      startTime: '3s',  
    },
    spike: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '2s', target: 3 }, 
        { duration: '2s', target: 2 }, 
      ],
      gracefulRampDown: '3s', 
      exec: 'spikeScenario',
      startTime: '5s', 
    },
    soak: {
      executor: 'constant-vus',
      vus: 1, 
      duration: '15s',
      exec: 'soakScenario',
      startTime: '5s', 
    },
  },
  thresholds: {
    http_req_duration: ['p(50)<10000'], 
    http_req_failed: ['rate<5'],  
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