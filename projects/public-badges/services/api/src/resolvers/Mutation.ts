import { MutationResolvers, OrganizationStatus } from "../generated/graphql.js";
import { PublicBadgesEventType } from "../types/events.js";
import uuid from "uuid/v1";

const {
  ORGANIZATION_REGISTRATION_REQUESTED,
  NEW_BADGECLASS_PROPOSED,
  BADGE_ISSUANCE_REQUESTED
} = PublicBadgesEventType;

const Mutation: MutationResolvers = {
  proposeValueCase() {
    console.log(NEW_BADGECLASS_PROPOSED);
    console.log(BADGE_ISSUANCE_REQUESTED);
    return "valueCase";
  },
  registerOrganization(_root, { input }, { eventBus }) {
    const { name, contact, admin, domainName } = input;
    return eventBus.put({
      detailType: ORGANIZATION_REGISTRATION_REQUESTED,
      detail: {
        organizationId: uuid(),
        name,
        contact,
        admin,
        identity: {
          domainName
        },
        status: OrganizationStatus.Pending,
        urls: [domainName]
      }
    });
  }
};

export default Mutation;
