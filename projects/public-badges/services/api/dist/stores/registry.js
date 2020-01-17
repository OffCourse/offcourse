"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const ddb = new aws_sdk_1.default.DynamoDB.DocumentClient();
const s3 = new aws_sdk_1.default.S3();
const getOrganization = (objectKey) => __awaiter(void 0, void 0, void 0, function* () {
    const Bucket = process.env.REGISTRY_BUCKET;
    if (!Bucket) {
        throw "Bucket Name is Required";
    }
    const { Body } = yield s3.getObject({ Bucket, Key: objectKey }).promise();
    const json = Body ? Body.toString("utf-8") : "{}";
    const organization = JSON.parse(json);
    return organization;
});
const listOrganizations = () => __awaiter(void 0, void 0, void 0, function* () {
    const Bucket = process.env.REGISTRY_BUCKET;
    if (!Bucket) {
        throw "Bucket Name is Required";
    }
    const { NextContinuationToken, CommonPrefixes } = yield s3
        .listObjectsV2({ Bucket, MaxKeys: 10, Delimiter: "/" })
        .promise();
    const keys = CommonPrefixes
        ? CommonPrefixes.map(({ Prefix }) => {
            return `${Prefix}meta.json`;
        })
        : [];
    return {
        keys,
        continuationToken: NextContinuationToken
    };
});
const getOrganizationId = (domainName) => __awaiter(void 0, void 0, void 0, function* () {
    const TableName = process.env.REGISTRY_LOOKUP_TABLE;
    if (!TableName) {
        throw "TableName is Required";
    }
    const Key = {
        identityType: "domainName",
        identityKey: `${domainName}`
    };
    const { Item } = yield ddb.get({ TableName, Key }).promise();
    return Item && Item.organizationId;
});
const queryOrganizationStatus = (status) => __awaiter(void 0, void 0, void 0, function* () {
    const TableName = process.env.REGISTRY_LOOKUP_TABLE;
    const IndexName = process.env.ORGANIZATION_STATUS_INDEX;
    if (!TableName || !IndexName) {
        throw "TableName is Required";
    }
    var params = {
        TableName,
        IndexName,
        KeyConditionExpression: "approvalStatus = :approvalStatus",
        ExpressionAttributeValues: {
            ":approvalStatus": status
        }
    };
    const { Items, Count } = yield ddb.query(params).promise();
    const keys = Items
        ? Items.map(({ organizationId }) => `${organizationId}/meta.json`)
        : [];
    return { keys, totalCount: Count };
});
const registry = {
    fetch({ organizationId, domainName }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (organizationId) {
                    return yield getOrganization(`${organizationId}/meta.json`);
                }
                if (domainName) {
                    const organizationId = yield getOrganizationId(domainName);
                    if (organizationId) {
                        return yield getOrganization(`${organizationId}/meta.json`);
                    }
                }
            }
            catch (e) {
                console.log(e);
            }
            return null;
        });
    },
    fetchAll({ filter }) {
        return __awaiter(this, void 0, void 0, function* () {
            const { keys } = filter
                ? yield queryOrganizationStatus(filter)
                : yield listOrganizations();
            return yield Promise.all(keys.map(getOrganization));
        });
    }
};
exports.default = registry;
//# sourceMappingURL=registry.js.map