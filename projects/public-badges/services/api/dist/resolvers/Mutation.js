"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const badgeClass_json_1 = __importDefault(require("../fixtures/badgeClass.json"));
const graphql_js_1 = require("../generated/graphql.js");
const v5_1 = __importDefault(require("uuid/v5"));
const types_js_1 = require("../types.js");
const Mutation = {
    addBadgeClass() {
        return badgeClass_json_1.default;
    },
    registerOrganization(_root, { input }, { datalake }) {
        const uuid = v5_1.default("publicspaces.org", v5_1.default.DNS);
        const payload = Object.assign({}, input, { path: `organizations/${uuid}/meta.json`, organizationId: `urn:uuid:${uuid}`, status: graphql_js_1.Status.Requested });
        return datalake.dump(types_js_1.PublicBadgesEventType.ORGANIZATION_REQUESTED_REGISTRATION, payload);
    }
};
exports.default = Mutation;
//# sourceMappingURL=Mutation.js.map