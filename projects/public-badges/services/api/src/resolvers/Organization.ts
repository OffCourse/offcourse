import {
  ContactResolvers,
  OrganizationResolvers,
  PendingOrganizationResolvers,
  ApprovedOrganizationResolvers,
  DomainsResolvers,
  OrganizationStatus
} from "../generated/graphql.js";

const Contact: ContactResolvers = {
  name({ name }) {
    return name;
  },
  email({ email }) {
    return email;
  }
};

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
  organizationId({ domains }) {
    return domains.main;
  },
  status({ status }) {
    return status;
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
  Contact,
  Organization,
  ApprovedOrganization,
  PendingOrganization,
  Domains
};
