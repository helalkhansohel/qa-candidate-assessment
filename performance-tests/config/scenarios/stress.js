export const stressScenarioConfiguration = {
    executor: 'ramping-vus',
    startVUs: 0,
    stages: [
        { duration: '30s', target: 10 }, // 1m- 20
        { duration: '1m', target: 20 }, //2m - 100
        { duration: '1m', target: 25 }, //2m -200
        { duration: '30s', target: 0 } //30w - 0
    ],
    gracefulRampDown: '10s',
    tags: { test_type: 'stress' }
};