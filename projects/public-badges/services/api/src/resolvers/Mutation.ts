import badgeClass from "../fixtures/badgeClass.json";
import { MutationResolvers, Status } from "../generated/graphql.js";
import uuidv5 from "uuid/v5";
import { PublicBadgesEventType } from "../types.js";

const {
  ORGANIZATION_REGISTRATION_REQUESTED,
  NEW_BADGECLASS_PROPOSED,
  BADGE_ISSUANCE_REQUESTED
} = PublicBadgesEventType;

const Mutation: MutationResolvers = {
  addBadgeClass() {
    console.log(NEW_BADGECLASS_PROPOSED);
    console.log(BADGE_ISSUANCE_REQUESTED);
    return badgeClass;
  },
  registerOrganization(_root, { input }, { datalake }) {
    const uuid = uuidv5("publicspaces.org", uuidv5.DNS);
    const payload = {
      ...input,
      path: `organizations/${uuid}/meta.json`,
      organizationId: `urn:uuid:${uuid}`,
      status: Status.Requested
    };
    return datalake.dump(ORGANIZATION_REGISTRATION_REQUESTED, payload);
  }
};

export default Mutation;
