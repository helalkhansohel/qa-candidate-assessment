export const loadScenarioConfiguration = {
    executor: 'ramping-vus',
    startVUs: 1,
    stages: [
        { duration: '1m', target: 20 },
        { duration: '2m', target: 20 },
        { duration: '30s', target: 50 },
        { duration: '1m', target: 50 },
        { duration: '30s', target: 0 }
    ],
    gracefulRampDown: '10s',
    tags: { test_type: 'load' }
};