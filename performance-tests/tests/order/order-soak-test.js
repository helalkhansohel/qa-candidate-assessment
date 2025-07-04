import { soakScenarioConfiguration } from '../../config/scenarios/soak.js';
import { orderThresholds } from '../../config/thresholds.js';
import {createOrderTest} from '../../api/order/order.js';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
    scenarios: {
        soak_test: {
            ...soakScenarioConfiguration,
            exec: 'default'
        }
    },
    thresholds: orderThresholds
};


export default function() {
    createOrderTest(); 
    
}

export function handleSummary(data) {
    return {
        "reports/order-soak-summary.html": htmlReport(data),
    };
}

