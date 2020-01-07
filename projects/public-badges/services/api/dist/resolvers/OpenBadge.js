"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OpenBadgeCriteria = {
    narrative({ narrative }) {
        return narrative;
    }
};
exports.OpenBadgeCriteria = OpenBadgeCriteria;
const OpenBadgeClass = {
    id({ id }) {
        return id;
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
    criteria({ criteria }) {
        return criteria;
    }
};
exports.OpenBadgeClass = OpenBadgeClass;
const OpenBadgeRecipient = {
    identity({ identity }) {
        return identity;
    },
    type({ type }) {
        return type;
    }
};
exports.OpenBadgeRecipient = OpenBadgeRecipient;
const OpenBadgeProof = {
    id({ id }) {
        return id;
    },
    name({ name }) {
        return name;
    },
    genre({ genre }) {
        return genre;
    },
    description({ description }) {
        return description;
    },
    narrative({ narrative }) {
        return narrative;
    }
};
exports.OpenBadgeProof = OpenBadgeProof;
const OpenBadge = {
    id({ id }) {
        return id;
    },
    badge({ badge }) {
        return badge;
    },
    recipient({ recipient }) {
        return recipient;
    },
    issuedOn({ issuedOn }) {
        return issuedOn;
    },
    expires({ expires }) {
        return expires;
    },
    evidence({ evidence }) {
        return evidence;
    }
};
exports.OpenBadge = OpenBadge;
//# sourceMappingURL=OpenBadge.js.map