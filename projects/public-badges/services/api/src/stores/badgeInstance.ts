import artifact from "../fixtures/zerobadge.json";
import uuidv5 from "uuid/v5";
import { times, partial } from "ramda";
import { BadgeInstanceStore } from "../types";
import { PublicBadgeStatus } from "../types/generated/graphql";
import AWS from "aws-sdk";

const s3 = new AWS.S3();

const { badge: badgeClass, recipient, evidence, issuedOn, expires } = artifact;

const generateBadge = (opts: { id: string }) => ({
  status: PublicBadgeStatus.Signed,
  name: badgeClass.name,
  badgeId: opts.id
    ? opts.id.replace(/urn:uuid:/, "")
    : uuidv5("waag.org", uuidv5.DNS),
  valueCaseId: badgeClass.id,
  tags: badgeClass.tags,
  description: badgeClass.description,
  narrative: badgeClass.criteria.narrative,
  recipientId: recipient.identity,
  evidence: evidence.map(({ id, ...proof }: any) => {
    const proofId = id.replace(/urn:uuid:/, "");
    return { ...proof, proofId };
  }),
  issuedOn: issuedOn,
  expires: expires,
  artifact
});

const badges = [
  generateBadge({ id: artifact.id }),
  ...times(partial(generateBadge, [{}]), 10)
];

const getBadgeInstance = async (objectKey: string) => {
  const Bucket = process.env.REGISTRY_BUCKET;
  if (!Bucket) {
    throw "Bucket Name is Required";
  }
  const { Body } = await s3.getObject({ Bucket, Key: objectKey }).promise();
  const json = Body ? Body.toString("utf-8") : "{}";
  const badge = JSON.parse(json);
  return badge;
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

const badgeInstance: BadgeInstanceStore = {
  async fetch(_args) {
    return badges[0];
  },
  async fetchAll(args) {
    const organizationId = args?.organizationId;
    if (!args) {
      return badges;
    }
    if (!organizationId) {
      return [];
    }
    const { keys } = await listBadges({ organizationId });
    return await Promise.all(keys.map(getBadgeInstance));
  }
};

export default badgeInstance;
