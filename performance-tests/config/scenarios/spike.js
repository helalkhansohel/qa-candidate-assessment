export const spikeScenarioConfiguration = {
    executor: 'ramping-vus',
    startVUs: 0,
    stages: [
        { duration: '30s', target: 5 }, //1m -10
        { duration: '10s', target: 20 }, //10s -100
        { duration: '30s', target: 3 } //1m - 10
    ],
    gracefulRampDown: '5s',
    tags: { test_type: 'spike' }
};