"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const valueCase_json_1 = __importDefault(require("../fixtures/valueCase.json"));
const { valueCaseId, name, tags, description, proposedBy, approvedBy, narrative, scenarios } = valueCase_json_1.default;
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
    valueCaseId() {
        return valueCaseId;
    },
    name() {
        return name;
    },
    proposedBy() {
        return proposedBy;
    },
    approvedBy() {
        return approvedBy;
    },
    tags() {
        return tags;
    },
    description() {
        return description;
    },
    narrative() {
        return narrative;
    },
    scenarios() {
        return scenarios;
    }
};
exports.ValueCase = ValueCase;
//# sourceMappingURL=ValueCase.js.map