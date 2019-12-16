import { MutationResolvers, OrganizationStatus } from "../generated/graphql.js";
import { PublicBadgesEventType } from "../types/events.js";

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
    return eventBus.put({
      detailType: ORGANIZATION_REGISTRATION_REQUESTED,
      detail: {
        ...input,
        organizationId: input.domains.main,
        status: OrganizationStatus.Requested
      }
    });
  }
};

export default Mutation;
