import { QueryResolvers } from "../generated/graphql.js";

const Query: QueryResolvers = {
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
  }
};

export default Query;
