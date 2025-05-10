import { soakScenarioConfiguration } from '../../config/scenarios/soak.js';
import { orderThresholds } from '../../config/thresholds.js';
import {createOrderTest} from '../../api/Order/order.js';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
    scenarios: {
        soak_test: {
            ...soakScenarioConfiguration,
            exec: 'soakScenario'
        }
    },
    thresholds: orderThresholds
};

export function soakScenario() {
    createOrderTest();
}

export function handleSummary(data) {
    return {
        "reports/order-soak-summary.html": htmlReport(data),
    };
}

