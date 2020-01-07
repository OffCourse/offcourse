"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("../generated/graphql");
const PublicBadge = {
    __resolveType({ status }) {
        switch (status) {
            case graphql_1.PublicBadgeStatus.Signed: {
                return "SignedPublicBadge";
            }
            case graphql_1.PublicBadgeStatus.Approved: {
                return "ApprovedPublicBadge";
            }
            case graphql_1.PublicBadgeStatus.Pending: {
                return "PendingPublicBadge";
            }
        }
    },
    badgeId({ badgeId }) {
        return badgeId;
    },
    valueCaseId({ valueCaseId }) {
        return valueCaseId;
    },
    status({ status }) {
        return status;
    },
    valueCase({ valueCaseId }, _args, { stores }) {
        return stores.valueCase.fetch({ valueCaseId: valueCaseId });
    },
    name({ name }) {
        return name;
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
    recipientId({ recipientId }) {
        return recipientId;
    },
    recipient({ recipientId }, _args, { stores }) {
        return stores.registry.fetch({ organizationId: recipientId });
    }
};
exports.PublicBadge = PublicBadge;
const PendingPublicBadge = Object.assign({}, PublicBadge);
exports.PendingPublicBadge = PendingPublicBadge;
const ApprovedPublicBadge = Object.assign(Object.assign({}, PendingPublicBadge), { evidence({ evidence }) {
        return evidence;
    } });
exports.ApprovedPublicBadge = ApprovedPublicBadge;
const SignedPublicBadge = Object.assign(Object.assign({}, ApprovedPublicBadge), { issuedOn({ issuedOn }) {
        return issuedOn;
    },
    expires({ expires }) {
        return expires;
    },
    artifact({ artifact }) {
        return artifact;
    } });
exports.SignedPublicBadge = SignedPublicBadge;
//# sourceMappingURL=PublicBadge.js.map