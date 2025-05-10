export const stressScenarioConfiguration = {
    executor: 'ramping-vus',
    startVUs: 0,
    stages: [
        { duration: '1m', target: 20 },
        { duration: '2m', target: 100 },
        { duration: '2m', target: 200 },
        { duration: '30s', target: 0 }
    ],
    gracefulRampDown: '10s',
    tags: { test_type: 'stress' }
};