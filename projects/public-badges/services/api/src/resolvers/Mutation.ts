import { MutationResolvers, OrganizationStatus } from "../generated/graphql.js";
import { PublicBadgesEventType } from "../types/events.js";
import uuid from "uuid/v1";
import AWS from "aws-sdk"; // eslint-disable-line import/no-extraneous-dependencies
const ddb = new AWS.DynamoDB.DocumentClient();

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
  async registerOrganization(_root, { input }, { eventBus, stores }) {
    const { name, contact, admin, domainName } = input;

    const organization = await stores.registry.fetch({ domainName });

    if (organization) {
      throw "ORG ALREADY EXISTS";
    }

    const TableName = process.env.REGISTRY_LOOKUP_TABLE;
    if (!TableName) {
      throw "The table name name must be set in your environment";
    }

    const organizationId = uuid();
    const status = OrganizationStatus.Pending;

    const Item = {
      identityType: "domainName",
      identityKey: `${domainName}`,
      approvalStatus: status,
      organizationId
    };
    console.log(Item);

    await ddb.put({ TableName, Item }).promise();

    return eventBus.put({
      detailType: ORGANIZATION_REGISTRATION_REQUESTED,
      detail: {
        organizationId,
        status,
        name,
        contact,
        admin,
        identity: {
          domainName
        },
        urls: [domainName]
      }
    });
  }
};

export default Mutation;
