import valueCase from "../fixtures/valueCase.json";
import { MutationResolvers, OrganizationStatus } from "../generated/graphql.js";
import uuidv5 from "uuid/v5";
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
    const uuid = uuidv5("publicspaces.org", uuidv5.DNS);
    const payload = {
      ...input,
      path: `organizations/${uuid}/meta.json`,
      organizationId: `urn:uuid:${uuid}`,
      status: OrganizationStatus.Pending
    };
    return eventBus.put({
      eventType: ORGANIZATION_REGISTRATION_REQUESTED,
      payload
    });
  }
};

export default Mutation;