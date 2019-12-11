import { OrganizationResolvers, DomainsResolvers } from "../generated/graphql.js";

const Organization: OrganizationResolvers = {
  organizationId({ organizationId }) {
    return organizationId;
  },
  status({ status }) {
    return status;
  },
  path({ path }) {
    return path;
  },
  name({ name }) {
    return name;
  },
  contact({ contact }) {
    return contact;
  },
  admin({ admin }) {
    return admin;
  },
  domains({ domains }) {
    return domains;
  }
}

const Domains: DomainsResolvers = {
  main({ main }) {
    return main
  },
  other({ other }) {
    return other
  }
}

export { Organization, Domains };
