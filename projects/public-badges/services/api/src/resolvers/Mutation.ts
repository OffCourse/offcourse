import badgeClass from "../fixtures/badgeClass.json";
import { MutationResolvers, Status } from "../generated/graphql.js";
import uuidv5 from "uuid/v5";
import { PublicBadgesEvent, PublicBadgesEventType } from "../types.js";

const Mutation: MutationResolvers = {
  addBadgeClass() {
    return badgeClass;
  },
  registerOrganization(_root, { input }, { datalake }) {
    const uuid = uuidv5("publicspaces.org", uuidv5.DNS);
    const organizationId = `urn:uuid:${uuid}`;
    const status = Status.Requested;
    const event: PublicBadgesEvent = {
      type: PublicBadgesEventType.ORGANIZATION_REQUESTED_REGISTRATION,
      data: {
        ...input,
        path: `${uuid}/meta.json`,
        organizationId,
        status
      }
    };
    return datalake.dump(event);
  }
};

export default Mutation;
