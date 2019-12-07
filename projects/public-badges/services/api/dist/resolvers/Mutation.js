"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const organization_json_1 = __importDefault(require("../fixtures/organization.json"));
const badgeClass_json_1 = __importDefault(require("../fixtures/badgeClass.json"));
const Mutation = {
    addBadgeClass() {
        return badgeClass_json_1.default;
    },
    registerOrganization() {
        return organization_json_1.default;
    }
};
exports.default = Mutation;
//# sourceMappingURL=Mutation.js.map