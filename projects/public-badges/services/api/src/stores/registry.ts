import { RegistryStore } from "../types";
import organization from "../fixtures/organization.json";
import { Organization } from "../generated/graphql.js";
import AWS from "aws-sdk";

const ddb = new AWS.DynamoDB.DocumentClient();
const s3 = new AWS.S3();

const getOrganization = async (organizationId: string) => {
  const Bucket = process.env.REGISTRY_BUCKET;
  if (!Bucket) {
    throw "Bucket Name is Required";
  }
  const Key = `${organizationId}/meta.json`;
  const { Body } = await s3.getObject({ Bucket, Key }).promise();
  const json = Body ? Body.toString("utf-8") : "{}";
  const organization = JSON.parse(json);
  return organization;
}

const getOrganizationId = async (domainName: string) => {
  const TableName = process.env.REGISTRY_LOOKUP_TABLE;
  if (!TableName) {
    throw "TableName is Required";
  }
  const Key = {
    identityType: "domainName",
    identityKey: `${domainName}`
  };
  const { Item } = await ddb.get({ TableName, Key }).promise();
  return Item && Item.organizationId;
};

const registry: RegistryStore = {
  async fetch({ organizationId, domainName }) {
    try {
      if (organizationId) {
        return await getOrganization(organizationId);
      }

      if (domainName) {
        const organizationId = await getOrganizationId(domainName);
        if (organizationId) {
          return await getOrganization(organizationId);
        }
      }
    } catch (e) {
      console.log(e);
    }
    return null;
  },
  async fetchAll() {
    return [organization as Organization];
  }
};

export default registry;
