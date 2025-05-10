import { spikeScenarioConfiguration } from '../../config/scenarios/spike.js';
import { orderThresholds } from '../../config/thresholds.js';
import {createOrderTest} from '../../api/order/order.js';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
    scenarios: {
        spike_test: {
            ...spikeScenarioConfiguration,
            exec: 'spikeScenario'
        }
    },
    thresholds: orderThresholds
};

export function spikeScenario() {
    createOrderTest();
}


export function handleSummary(data) {
    return {
        "reports/order-spike-summary.html": htmlReport(data),
    };
}

