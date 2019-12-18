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
const graphql_js_1 = require("../generated/graphql.js");
const events_js_1 = require("../types/events.js");
const v1_1 = __importDefault(require("uuid/v1"));
const aws_sdk_1 = __importDefault(require("aws-sdk")); // eslint-disable-line import/no-extraneous-dependencies
const ddb = new aws_sdk_1.default.DynamoDB.DocumentClient();
const { ORGANIZATION_REGISTRATION_REQUESTED, NEW_BADGECLASS_PROPOSED, BADGE_ISSUANCE_REQUESTED } = events_js_1.PublicBadgesEventType;
const Mutation = {
    proposeValueCase() {
        console.log(NEW_BADGECLASS_PROPOSED);
        console.log(BADGE_ISSUANCE_REQUESTED);
        return "valueCase";
    },
    registerOrganization(_root, { input }, { eventBus, stores }) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, contact, admin, domainName } = input;
            const organization = yield stores.registry.fetch({ domainName });
            if (organization) {
                throw "ORG ALREADY EXISTS";
            }
            const TableName = process.env.REGISTRY_LOOKUP_TABLE;
            if (!TableName) {
                throw "The table name name must be set in your environment";
            }
            const organizationId = v1_1.default();
            const status = graphql_js_1.OrganizationStatus.Pending;
            const Item = {
                identityType: "domainName",
                identityKey: `${domainName}`,
                approvalStatus: status,
                organizationId
            };
            console.log(Item);
            yield ddb.put({ TableName, Item }).promise();
            return eventBus.put({
                detailType: ORGANIZATION_REGISTRATION_REQUESTED,
                detail: {
                    organizationId,
                    status,
                    name,
                    contact,
                    admin,
                    identity: {
                        domainName
                    },
                    urls: [domainName]
                }
            });
        });
    }
};
exports.default = Mutation;
//# sourceMappingURL=Mutation.js.map