import { MutationResolvers, OrganizationStatus } from "../generated/graphql.js";
import { PublicBadgesEventType } from "../types/events.js";
import uuid from "uuid/v1";

const timeout = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
const {
  ORGANIZATION_REGISTRATION_REQUESTED,
  NEW_BADGECLASS_PROPOSED,
  BADGE_ISSUANCE_REQUESTED
} = PublicBadgesEventType;

const Mutation: MutationResolvers = {
  proposeValueCase(_root, { input }, { stores }) {
    const { domainName } = input;
    const organization = await stores.registry.fetch({ domainName });
    console.log(input);
    return "valueCase";
    return eventBus.put({
      detailType: NEW_BADGECLASS_PROPOSED,
      detail: {
        organizationId,
        status,
        name,
        contact,
        admin,
        domainName,
        urls: [domainName]
      }
    });
  },
  async registerOrganization(_root, { input }, { eventBus, stores }) {
    const { name, contact, admin, domainName } = input;

    /**
       just to make sure, the registry is updated to avoid duplicates.
       It's highly unlikely (and relatively innocent) but still...
       The unavoidable perils of async ;-)
    **/

    await timeout(500);
    const organization = await stores.registry.fetch({ domainName });

    if (organization) {
      throw "ORG ALREADY EXISTS";
    }

    const organizationId = uuid();
    const status = OrganizationStatus.Pending;

    return eventBus.put({
      detailType: ORGANIZATION_REGISTRATION_REQUESTED,
      detail: {
        organizationId,
        status,
        name,
        contact,
        admin,
        domainName,
        urls: [domainName]
      }
    });
  }
};

export default Mutation;
