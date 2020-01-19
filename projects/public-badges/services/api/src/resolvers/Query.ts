import { QueryResolvers } from "../types/generated/graphql";

const Query: QueryResolvers = {
  getBadge(_root, args, { stores }) {
    return stores.badgeInstance.fetch(args);
  },
  async getAllBadges(_root, args, { stores }) {
    const domainName = args?.domainName;
    const { organizationId } = await stores.registry.fetch({ domainName });
    return stores.badgeInstance.fetchAll({ organizationId });
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

export default Query;
