import valueCase from "../fixtures/valueCase.json";
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
    const payload = {
      ...input,
      organizationId: input.domains.main,
      status: OrganizationStatus.Pending
    };
    return eventBus.put({
      eventType: ORGANIZATION_REGISTRATION_REQUESTED,
      payload
    });
  }
};

export default Mutation;
