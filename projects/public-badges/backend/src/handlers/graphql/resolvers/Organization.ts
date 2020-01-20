import {
  ContactResolvers,
  OrganizationResolvers,
  PendingOrganizationResolvers,
  ApprovedOrganizationResolvers,
  OrganizationStatus
} from "@types";

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
  organizationId({ organizationId }) {
    return organizationId;
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
  urls({ urls }) {
    return urls;
  },
  domainName({ domainName }) {
    return domainName;
  }
};

const PendingOrganization: PendingOrganizationResolvers = {
  ...Organization
};

const ApprovedOrganization: ApprovedOrganizationResolvers = {
  ...PendingOrganization,
  approvedBy({ approvedBy }) {
    return approvedBy;
  },
  approvedOn({ approvedOn }) {
    return approvedOn;
  }
};

export { Contact, Organization, ApprovedOrganization, PendingOrganization };
