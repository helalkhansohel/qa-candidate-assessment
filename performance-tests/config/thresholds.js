export const orderThresholds = {
    http_req_duration: ['p(95)<1000', 'p(99)<3000'], //500, 1000
    http_req_failed: ['rate<0.10'], //.01
    checks: ['rate>0.90'] //99
};

// export const authThresholds = {
//     http_req_duration: ['p(95)<300'],
//     http_req_failed: ['rate<0.005']
// };