"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Scenario = {
    title({ title }) {
        return title;
    },
    statements({ statements }) {
        return statements;
    }
};
exports.Scenario = Scenario;
const ValueCase = {
    valueCaseId({ valueCaseId }) {
        return valueCaseId;
    },
    name({ name }) {
        return name;
    },
    proposedBy({ proposedBy }, _args, { stores }) {
        return stores.registry.fetch({
            domainName: proposedBy
        });
    },
    approvedBy({ approvedBy }) {
        return approvedBy;
    },
    tags({ tags }) {
        return tags;
    },
    description({ description }) {
        return description;
    },
    narrative({ narrative }) {
        return narrative;
    },
    scenarios({ scenarios }) {
        return scenarios;
    }
};
exports.ValueCase = ValueCase;
//# sourceMappingURL=ValueCase.js.map