export const loadScenarioConfiguration = {
    executor: 'ramping-vus',
    startVUs: 1,
    stages: [
        { duration: '30s', target: 5 }, //1m -20
        { duration: '1m', target: 5 }, //2m -20
        { duration: '15s', target: 10 }, //30s -50
        { duration: '30s', target: 10 }, //1m -50
        { duration: '15s', target: 0 }  //30s -0
    ],
    gracefulRampDown: '10s',
    tags: { test_type: 'load' }
};