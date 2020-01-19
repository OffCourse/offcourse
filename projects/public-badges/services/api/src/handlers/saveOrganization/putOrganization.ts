import AWS from "aws-sdk"; // eslint-disable-line import/no-extraneous-dependencies
import { PendingOrganization } from "../../types/generated/graphql";
const s3 = new AWS.S3();

type Save<T> = (id: string, document: T) => Promise<T>;

const putOrganization: Save<PendingOrganization> = async (id, organization) => {
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

export default putOrganization;
