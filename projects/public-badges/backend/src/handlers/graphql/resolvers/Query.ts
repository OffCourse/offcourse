import { QueryResolvers } from "@types";

const Query: QueryResolvers = {
  async getAllBadges(_root, args, { stores }) {
    const domainName = args?.domainName;
    console.log(domainName);
    if (`${domainName}` === "https://example.org/") {
      return stores.badgeInstance.fetchAll({});
    }
    const { organizationId } = await stores.registry.fetch({ domainName });
    if (!organizationId) {
      throw "not a known organization for now";
    }
    return stores.badgeInstance.fetchAll({ organizationId });
  }
};

export default Query;
