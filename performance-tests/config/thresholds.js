export const orderThresholds = {
    http_req_duration: ['p(50)<1000', 'p(70)<3000'], //Should be 95-500, 99-1000
    http_req_failed: ['rate<0.30'], //Should be .01
    checks: ['rate>0.90'] //Should be 0.99
};

// export const authThresholds = {
//     http_req_duration: ['p(95)<300'],
//     http_req_failed: ['rate<0.005']
// };