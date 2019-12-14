import AWS from "aws-sdk"; // eslint-disable-line import/no-extraneous-dependencies
import { Handler } from "aws-lambda";
import { PendingOrganization } from "../generated/graphql";
import { PublicBadgesEventType } from "../types/events.js";

const {
  ORGANIZATION_APPROVAL_REQUESTED,
} = PublicBadgesEventType;

const s3 = new AWS.S3();
const eventBridge = new AWS.EventBridge();

type Save<T> = (id: string, document: T) => Promise<T>;

const putEvent: Save<PendingOrganization> = async (
  eventType,
  payload
) => {
  const reply = await eventBridge
    .putEvents({
      Entries: [
        {
          Source: "public-badges.register-organization-handler",
          DetailType: eventType,
          Detail: JSON.stringify(payload, null, 2)
        }
      ]
    })
    .promise();
  console.log(reply);
  return payload;
};

const saveOrganization: Save<PendingOrganization> = async (
  id,
  organization
) => {
  const Bucket = process.env.REGISTRY_BUCKET;
  if (!Bucket) {
    throw "Bucket Name is Required";
  }
  const Key = `${id}/meta.json`;
  const reply = await s3
    .putObject({
      Bucket,
      Key,
      Body: JSON.stringify(organization, null, 2)
    })
    .promise();
  console.log(reply);
  return organization;
};

const registerOrganization: Handler<{ detail: PendingOrganization }> = async (
  { detail: organization },
  _context,
  callback
) => {
  const { organizationId: id } = organization;
  const response = await saveOrganization(id, organization);
  const reply = await putEvent(ORGANIZATION_APPROVAL_REQUESTED, organization);
  console.log(response, reply);
  callback(null, organization);
};

export default registerOrganization;
