"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_js_1 = require("../generated/graphql.js");
const events_js_1 = require("../types/events.js");
const v1_1 = __importDefault(require("uuid/v1"));
const { ORGANIZATION_REGISTRATION_REQUESTED, NEW_BADGECLASS_PROPOSED, BADGE_ISSUANCE_REQUESTED } = events_js_1.PublicBadgesEventType;
const Mutation = {
    proposeValueCase() {
        console.log(NEW_BADGECLASS_PROPOSED);
        console.log(BADGE_ISSUANCE_REQUESTED);
        return "valueCase";
    },
    registerOrganization(_root, { input }, { eventBus }) {
        const { name, contact, admin, domainName } = input;
        return eventBus.put({
            detailType: ORGANIZATION_REGISTRATION_REQUESTED,
            detail: {
                organizationId: v1_1.default(),
                name,
                contact,
                admin,
                identity: {
                    domainName
                },
                status: graphql_js_1.OrganizationStatus.Pending,
                urls: [domainName]
            }
        });
    }
};
exports.default = Mutation;
//# sourceMappingURL=Mutation.js.map