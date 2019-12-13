"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_js_1 = require("../generated/graphql.js");
const v5_1 = __importDefault(require("uuid/v5"));
const events_js_1 = require("../types/events.js");
const { ORGANIZATION_REGISTRATION_REQUESTED, NEW_BADGECLASS_PROPOSED, BADGE_ISSUANCE_REQUESTED } = events_js_1.PublicBadgesEventType;
const Mutation = {
    proposeValueCase() {
        console.log(NEW_BADGECLASS_PROPOSED);
        console.log(BADGE_ISSUANCE_REQUESTED);
        return "valueCase";
    },
    registerOrganization(_root, { input }, { eventBus }) {
        const uuid = v5_1.default("publicspaces.org", v5_1.default.DNS);
        const payload = Object.assign({}, input, { path: `organizations/${uuid}/meta.json`, organizationId: `urn:uuid:${uuid}`, status: graphql_js_1.OrganizationStatus.Pending });
        return eventBus.put({
            eventType: ORGANIZATION_REGISTRATION_REQUESTED,
            payload
        });
    }
};
exports.default = Mutation;
//# sourceMappingURL=Mutation.js.map