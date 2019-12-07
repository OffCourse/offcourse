"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PublicBadge = {
    badgeId({ id }) {
        return id;
    },
    badgeClassId({ badge }) {
        return badge.id;
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
    },
    issuedOn({ issuedOn }) {
        return issuedOn;
    },
    expires({ expires }) {
        return expires;
    },
    evidence({ evidence }) {
        return evidence;
    },
    artifact(badge) {
        return badge;
    }
};
exports.default = PublicBadge;
//# sourceMappingURL=PublicBadge.js.map