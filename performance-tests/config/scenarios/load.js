export const loadScenarioConfiguration = {
    executor: 'ramping-vus',
    startVUs: 1,
    stages: [
        { duration: '15s', target: 5 }, //1m -20
        { duration: '1m', target: 5 }, //2m -20
        { duration: '15s', target: 0 }  //30s -0
    ],
    gracefulRampDown: '10s',
    tags: { test_type: 'load' }
};