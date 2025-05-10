import { stressScenarioConfiguration } from '../../config/scenarios/stress.js';
import { orderThresholds } from '../../config/thresholds.js';
import {createOrderTest} from '../../api/Order/order.js';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
    scenarios: {
        stress_test: {
            ...stressScenarioConfiguration,
            exec: 'stressScenario'
        }
    },
    thresholds: orderThresholds
};

export function stressScenario() {
    createOrderTest();
}

export function handleSummary(data) {
    return {
        "reports/order-stress-summary.html": htmlReport(data),
    };
}

