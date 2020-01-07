"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Query = {
    getBadge(_root, args, { stores }) {
        return stores.badgeInstance.fetch(args);
    },
    getAllBadges(_root, args, { stores }) {
        return stores.badgeInstance.fetchAll(args);
    },
    getOrganization(_root, { organizationId, domainName }, { stores }) {
        return stores.registry.fetch({ organizationId, domainName });
    },
    getAllOrganizations(_root, args, { stores }) {
        return stores.registry.fetchAll(args);
    },
    getValueCase(_root, args, { stores }) {
        return stores.valueCase.fetch(args);
    },
    getAllValueCases(_root, args, { stores }) {
        return stores.valueCase.fetchAll(args);
    }
};
exports.default = Query;
//# sourceMappingURL=Query.js.map