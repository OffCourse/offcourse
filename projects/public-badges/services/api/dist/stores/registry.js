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
const organization_json_1 = __importDefault(require("../fixtures/organization.json"));
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const ddb = new aws_sdk_1.default.DynamoDB.DocumentClient();
const s3 = new aws_sdk_1.default.S3();
const getOrganization = (organizationId) => __awaiter(void 0, void 0, void 0, function* () {
    const Bucket = process.env.REGISTRY_BUCKET;
    if (!Bucket) {
        throw "Bucket Name is Required";
    }
    const Key = `${organizationId}/meta.json`;
    const { Body } = yield s3.getObject({ Bucket, Key }).promise();
    const json = Body ? Body.toString("utf-8") : "{}";
    const organization = JSON.parse(json);
    return organization;
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
const registry = {
    fetch({ organizationId, domainName }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (organizationId) {
                    return yield getOrganization(organizationId);
                }
                if (domainName) {
                    const organizationId = yield getOrganizationId(domainName);
                    if (organizationId) {
                        return yield getOrganization(organizationId);
                    }
                }
            }
            catch (e) {
                console.log(e);
            }
            return null;
        });
    },
    fetchAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return [organization_json_1.default];
        });
    }
};
exports.default = registry;
//# sourceMappingURL=registry.js.map