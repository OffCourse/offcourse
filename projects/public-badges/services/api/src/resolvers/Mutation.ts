import {
  MutationResolvers,
  OrganizationStatus,
  PublicBadgeStatus,
  PendingOrganization
} from "../types/generated/graphql";
import { PublicBadge } from "../types/models";
import { PublicBadgesEventType } from "../types/events.js";
import uuid from "uuid/v1";

const timeout = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const {
  ORGANIZATION_REGISTRATION_REQUESTED,
  BADGE_ISSUANCE_REQUESTED
} = PublicBadgesEventType;

const Mutation: MutationResolvers = {
  async applyForBadge(_root, { input }, { stores, eventBus }) {
    const { valueCaseId, domainName } = input;

    const organization = await stores.registry.fetch({ domainName });

    if (!organization) {
      throw "ORG DOES NOT EXISTS";
    }

    const valueCase = await stores.valueCase.fetch({ valueCaseId });
    if (!valueCase) {
      throw "ValueCase does not exist";
    }

    const badgeId = uuid();
    const status = PublicBadgeStatus.Pending;
    const { name, tags, description, narrative } = valueCase;
    const { organizationId: recipientId } = organization;

    return eventBus.put({
      detailType: BADGE_ISSUANCE_REQUESTED,
      detail: {
        badgeId,
        status,
        valueCaseId,
        name,
        tags,
        description,
        narrative,
        recipientId
      }
    }) as Promise<PublicBadge>;
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
    }) as Promise<PendingOrganization>;
  }
};

export default Mutation;
