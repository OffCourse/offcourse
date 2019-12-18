"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Query = {
    getBadge(_root, args, { stores }) {
        return stores.badgeInstance.fetch(args);
    },
    getAllBadges(_root, _args, { stores }) {
        return stores.badgeInstance.fetchAll();
    },
    getOrganization(_root, { organizationId, domainName }, { stores }) {
        return stores.registry.fetch({ organizationId, domainName });
    },
    getAllOrganizations(_root, _args, { stores }) {
        return stores.registry.fetchAll();
    }
};
exports.default = Query;
//# sourceMappingURL=Query.js.map