"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const feature_json_1 = __importDefault(require("../fixtures/feature.json"));
const { featureId, name, tags, description, narrative } = feature_json_1.default;
const Feature = {
    featureId() {
        return featureId;
    },
    name() {
        return name;
    },
    tags() {
        return tags;
    },
    description() {
        return description;
    },
    narrative() {
        return narrative;
    }
};
exports.default = Feature;
//# sourceMappingURL=Feature.js.map