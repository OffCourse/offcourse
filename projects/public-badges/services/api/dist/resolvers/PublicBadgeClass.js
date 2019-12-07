"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const badgeClass_json_1 = __importDefault(require("../fixtures/badgeClass.json"));
const { badgeClassId, name, tags, description, narrative } = badgeClass_json_1.default;
const PublicBadgeClass = {
    badgeClassId() {
        return badgeClassId;
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
exports.default = PublicBadgeClass;
//# sourceMappingURL=PublicBadgeClass.js.map