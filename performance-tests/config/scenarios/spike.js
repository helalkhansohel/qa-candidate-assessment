export const spikeScenarioConfiguration = {
    executor: 'ramping-vus',
    startVUs: 0,
    stages: [
        { duration: '1m', target: 10 },
        { duration: '10s', target: 100 },
        { duration: '1m', target: 10 }
    ],
    gracefulRampDown: '5s',
    tags: { test_type: 'spike' }
};