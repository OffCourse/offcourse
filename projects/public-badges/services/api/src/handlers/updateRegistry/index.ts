import AWS from "aws-sdk"; // eslint-disable-line import/no-extraneous-dependencies
import { Handler } from "aws-lambda";

const s3 = new AWS.S3({ apiVersion: "2006-03-01" });

const echo: Handler = async (
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
  const res = {
    identityType: "domainName",
    identityKey: identity.domainName,
    status,
    organizationId
  };
  console.log(JSON.stringify(res));
  callback(null, event.detail);
};

export default echo;
