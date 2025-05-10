export const orderThresholds = {
    http_req_duration: ['p(95)<500', 'p(99)<1000'],
    http_req_failed: ['rate<0.01'],
    checks: ['rate>0.99']
};

// export const authThresholds = {
//     http_req_duration: ['p(95)<300'],
//     http_req_failed: ['rate<0.005']
// };