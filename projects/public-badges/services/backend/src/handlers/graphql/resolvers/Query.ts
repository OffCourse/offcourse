import { QueryResolvers } from "@types";

const Query: QueryResolvers = {
  async getAllBadges(_root, args, { stores }) {
    const domainName = args?.domainName;
    const { organizationId } = await stores.registry.fetch({ domainName });
    return stores.badgeInstance.fetchAll({ organizationId });
  }
};

export default Query;
