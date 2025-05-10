import { check } from 'k6';
import http from 'k6/http';

export function getAuthToken(baseUrl) {
  
  // Request body
  const payload = JSON.stringify({
    clientName: `Helal Khan`,
    clientEmail: `test_${Math.floor(Math.random() * 10000)}@test.com`,
  });
  
  //Request header
  const params = {
    headers: { 'Content-Type': 'application/json' },
  };
  // Request
  const res = http.post(`${baseUrl}/api-clients`, payload, params);
  //Verifucation
  check(res,{
    'Token creation status is 201': (r) => r.status === 201,
    'Token ID exists': (r) => JSON.parse(r.body).accessToken !== undefined,
  });
  console.log("Get AuthToken: Respnse code "+res.status);
  return res.status === 201 ? JSON.parse(res.body).accessToken : null;
  
}