import { loadScenarioConfiguration } from '../../config/scenarios/load.js';
import { orderThresholds } from '../../config/thresholds.js';
import {createOrderTest} from '../../api/Order/order.js';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
    scenarios: {
        load_test: {
            ...loadScenarioConfiguration,
            exec: 'loadScenario'
        }
    },
    thresholds: orderThresholds
};

export function loadScenario() {
    createOrderTest();
}

export function handleSummary(data) {
    return {
        "reports/order-load-summary.html": htmlReport(data),
    };
}

