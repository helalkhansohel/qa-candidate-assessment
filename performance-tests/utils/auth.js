import http from 'k6/http';

export function getAuthToken(baseUrl) {
  
  const payload = JSON.stringify({
    clientName: `Helal Khan`,
    clientEmail: `test_${Math.floor(Math.random() * 10000)}@test.com`,
  });
  
  const params = {
    headers: { 'Content-Type': 'application/json' },
  };
  
  const res = http.post(`${baseUrl}/api-clients`, payload, params);
  
  if (res.status !== 201) {
    console.error(`Failed to get auth token: ${res.body}`);
    return null;
  }{
    console.log("Authentication sucessful: "+res.status);
  }
  
  return JSON.parse(res.body).accessToken;

}