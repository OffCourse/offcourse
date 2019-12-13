import {
  OrganizationResolvers,
  PendingOrganizationResolvers,
  ApprovedOrganizationResolvers,
  DomainsResolvers,
  OrganizationStatus
} from "../generated/graphql.js";

const Organization: OrganizationResolvers = {
  __resolveType({ status }) {
    switch (status) {
      case OrganizationStatus.Pending: {
        return "PendingOrganization";
      }
      case OrganizationStatus.Approved: {
        return "ApprovedOrganization";
      }
    }
  },
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
};

const PendingOrganization: PendingOrganizationResolvers = {
  ...Organization
};

const ApprovedOrganization: ApprovedOrganizationResolvers = {
  ...PendingOrganization,
  approvedBy({ approvedBy }) {
    return approvedBy
  },
  approvedOn({ approvedOn }) {
    return approvedOn
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

export {
  Organization,
  ApprovedOrganization,
  PendingOrganization,
  Domains
};
