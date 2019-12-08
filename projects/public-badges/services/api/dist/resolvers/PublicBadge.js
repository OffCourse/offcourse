"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("../generated/graphql");
const PublicBadge = {
    __resolveType() {
        return "SignedPublicBadge";
    },
    badgeId({ id }) {
        return id;
    },
    badgeClassId({ badge }) {
        return badge.id;
    },
    status() {
        return graphql_1.Status.Signed;
    },
    badgeClass({ badge }, _args, { stores }) {
        return stores.badgeClass.fetch({ badgeClassId: badge.id });
    },
    name({ badge }) {
        return badge.name;
    },
    tags({ badge }) {
        return badge.tags;
    },
    description({ badge }) {
        return badge.description;
    },
    narrative({ badge }) {
        return badge.criteria.narrative;
    },
    recipientId({ recipient }) {
        return recipient.identity;
    }
};
exports.PublicBadge = PublicBadge;
const RequestedPublicBadge = Object.assign({}, PublicBadge);
exports.RequestedPublicBadge = RequestedPublicBadge;
const ApprovedPublicBadge = Object.assign({}, RequestedPublicBadge, { evidence({ evidence }) {
        return evidence;
    } });
exports.ApprovedPublicBadge = ApprovedPublicBadge;
const SignedPublicBadge = Object.assign({}, ApprovedPublicBadge, { issuedOn({ issuedOn }) {
        return issuedOn;
    },
    expires({ expires }) {
        return expires;
    },
    artifact(badge) {
        return badge;
    } });
exports.SignedPublicBadge = SignedPublicBadge;
//# sourceMappingURL=PublicBadge.js.map