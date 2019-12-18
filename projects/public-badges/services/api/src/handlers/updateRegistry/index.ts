import AWS from "aws-sdk"; // eslint-disable-line import/no-extraneous-dependencies
import { Handler } from "aws-lambda";

const s3 = new AWS.S3({ apiVersion: "2006-03-01" });
const ddb = new AWS.DynamoDB.DocumentClient();

const updateRegistry: Handler = async (
  event,
  _context,
  callback
) => {
  const { eventName, s3: detail } = event.Records[0];
  const { bucket, object } = detail;
  const Bucket = bucket.name;
  const Key = object.key;
  const { Body } = await s3.getObject({ Bucket, Key }).promise();
  const json = Body ? Body.toString('utf-8') : "{}";
  const { identity, status, organizationId } = JSON.parse(json)

  const TableName = process.env.REGISTRY_LOOKUP_TABLE;
  if (!TableName) {
    throw "The table name name must be set in your environment";
  }
  const Item = {
    identityType: "domainName",
    identityKey: identity.domainName,
    approvalStatus: status,
    organizationId
  };

  const res = await ddb.put({ TableName, Item }).promise()
  console.log(JSON.stringify(res));
  callback(null, event.detail);
};

export default updateRegistry;
