import AWS from "aws-sdk"; // eslint-disable-line import/no-extraneous-dependencies
import {
  PublicBadgesEventType as EV,
  OrganizationRegistrationRequestedEvent,
  PublicBadgesHandler
} from "@types";

export type InputEvent = OrganizationRegistrationRequestedEvent;
export type OutputEvent = null;

const ddb = new AWS.DynamoDB.DocumentClient();
const updateRegistry: PublicBadgesHandler<InputEvent, OutputEvent> = async ({
  detailType,
  detail
}) => {
  const { organizationId, domainName, status } = detail;
  switch (detailType) {
    case EV.ORGANIZATION_REGISTRATION_REQUESTED: {
      const TableName = process.env.REGISTRY_LOOKUP_TABLE;
      if (!TableName) {
        throw "The table name name must be set in your environment";
      }
      const Item = {
        identityType: "domainName",
        identityKey: domainName,
        approvalStatus: status,
        organizationId
      };
      const res = await ddb.put({ TableName, Item }).promise();
      console.log(JSON.stringify(res));
      return null;
    }
  }
};

export default updateRegistry;
