"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_js_1 = require("../generated/graphql.js");
const events_js_1 = require("../types/events.js");
const { ORGANIZATION_REGISTRATION_REQUESTED, NEW_BADGECLASS_PROPOSED, BADGE_ISSUANCE_REQUESTED } = events_js_1.PublicBadgesEventType;
const Mutation = {
    proposeValueCase() {
        console.log(NEW_BADGECLASS_PROPOSED);
        console.log(BADGE_ISSUANCE_REQUESTED);
        return "valueCase";
    },
    registerOrganization(_root, { input }, { eventBus }) {
        return eventBus.put({
            detailType: ORGANIZATION_REGISTRATION_REQUESTED,
            detail: Object.assign(Object.assign({}, input), { organizationId: input.domains.main, status: graphql_js_1.OrganizationStatus.Requested })
        });
    }
};
exports.default = Mutation;
//# sourceMappingURL=Mutation.js.map