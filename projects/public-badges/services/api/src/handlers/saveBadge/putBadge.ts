import AWS from "aws-sdk"; // eslint-disable-line import/no-extraneous-dependencies
import { PendingPublicBadgeProxy } from "../../types";
const s3 = new AWS.S3();

type Save<T> = (id: string, document: T) => Promise<T>;

const putBadge: Save<PendingPublicBadgeProxy> = async (id, badge) => {
  const Bucket = process.env.REGISTRY_BUCKET;
  if (!Bucket) {
    throw "Bucket Name is Required";
  }
  const Key = `${id}/meta.json`;
  const reply = await s3
    .putObject({
      Bucket,
      Key,
      Body: JSON.stringify(badge, null, 2)
    })
    .promise();
  console.log(reply);
  return badge;
};

export default putBadge;
