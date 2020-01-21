import artifact from "./zerobadge.json";
import { times, partial } from "ramda";
import { Store, PublicBadge } from "@types";
import AWS from "aws-sdk";

const s3 = new AWS.S3();

const generateBadge = () => artifact;

const badges = [...times(partial(generateBadge, [{}]), 10)];

const getBadgeInstance = async (objectKey: string) => {
  const Bucket = process.env.REGISTRY_BUCKET;
  if (!Bucket) {
    throw "Bucket Name is Required";
  }
  try {
    const { Body } = await s3.getObject({ Bucket, Key: objectKey }).promise();
    const json = Body ? Body.toString("utf-8") : "{}";
    const badge = JSON.parse(json);
    return badge;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const listBadges = async ({ organizationId }: { organizationId?: string }) => {
  const Bucket = process.env.REGISTRY_BUCKET;
  if (!Bucket) {
    throw "Bucket Name is Required";
  }
  const { NextContinuationToken, CommonPrefixes } = await s3
    .listObjectsV2({
      Bucket,
      MaxKeys: 10,
      Delimiter: "/",
      Prefix: `${organizationId}/badges/`
    })
    .promise();
  const keys: string[] = CommonPrefixes
    ? CommonPrefixes.map(({ Prefix }) => {
        return `${Prefix!}public-badge.json`;
      })
    : [];
  return {
    keys,
    continuationToken: NextContinuationToken
  };
};

export type BadgeInstanceStore = Store<
  { organizationId: string; valueCaseId: string },
  { organizationId?: string },
  PublicBadge | null
>;

const badgeInstance: BadgeInstanceStore = {
  async fetch({ organizationId, valueCaseId }) {
    return await getBadgeInstance(
      `${organizationId}/badges/${valueCaseId}/public-badge.json`
    );
  },
  async fetchAll(args?) {
    const organizationId = args?.organizationId;
    if (!organizationId) {
      return badges;
    }
    const { keys } = await listBadges({ organizationId });
    return await Promise.all(keys.map(getBadgeInstance));
  }
};

export default badgeInstance;
