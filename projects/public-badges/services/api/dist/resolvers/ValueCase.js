"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const voca_1 = require("voca");
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
    valueCaseId({ proposedBy, name }) {
        const normalizedName = voca_1.slugify(name);
        return `${proposedBy}@${normalizedName}`;
    },
    name({ name }) {
        return name;
    },
    proposedBy({ proposedBy }, _args, { stores }) {
        return stores.registry.fetch({ organizationId: proposedBy });
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