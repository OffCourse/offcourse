import {
  MutationResolvers,
  OrganizationStatus,
  PublicBadgeStatus,
  PublicBadge,
  PublicBadgesEventType,
  Organization
} from "@types";
import uuid from "uuid/v1";

const timeout = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const {
  ORGANIZATION_REGISTRATION_REQUESTED,
  BADGE_ISSUANCE_REQUESTED
} = PublicBadgesEventType;

const Mutation: MutationResolvers = {
  async applyForBadge(_root, { input }, { stores, eventBus }) {
    const { valueCaseId, domainName } = input;

    /**
       short timeout just to make sure, the registry is updated to avoid duplicates.
       It's highly unlikely (and relatively innocent) but still...
       The unavoidable perils of async ;-)
    **/
    await timeout(500);
    const { organizationId } = await stores.registry.fetch({ domainName });

    if (!organizationId) {
      throw "ORG DOES NOT EXISTS";
    }

    const valueCase = await stores.valueCase.fetch({ valueCaseId });
    console.log(valueCase);
    if (!valueCase) {
      throw "ValueCase does not exist";
    }

    const badge = await stores.badgeInstance.fetch({
      organizationId,
      valueCaseId
    });

    if (badge) {
      throw "your organization already applied for this badge";
    }

    const badgeId = uuid();
    const status = PublicBadgeStatus.Pending;
    const { name, tags, description, narrative } = valueCase;

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
        recipientId: organizationId
      }
    }) as Promise<PublicBadge>;
  },
  async registerOrganization(_root, { input }, { eventBus, stores }) {
    const { name, contact, admin, domainName } = input;

    /**
       short timeout just to make sure, the registry is updated to avoid duplicates.
       It's highly unlikely (and relatively innocent) but still...
       The unavoidable perils of async ;-)
    **/

    await timeout(500);
    const organization = await stores.registry.fetch({ domainName });
    console.log(organization);
    console.log(process.env.REGISTRY_BUCKET, process.env.REGISTRY_BUCKET);

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
    }) as Promise<Organization>;
  }
};

export default Mutation;
