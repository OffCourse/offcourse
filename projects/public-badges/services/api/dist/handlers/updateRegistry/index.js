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
const aws_sdk_1 = __importDefault(require("aws-sdk")); // eslint-disable-line import/no-extraneous-dependencies
const ddb = new aws_sdk_1.default.DynamoDB.DocumentClient();
const events_js_1 = require("../../types/events.js");
const updateRegistry = ({ detailType, detail }) => __awaiter(void 0, void 0, void 0, function* () {
    const { organizationId, domainName, status } = detail;
    switch (detailType) {
        case events_js_1.PublicBadgesEventType.ORGANIZATION_REGISTRATION_REQUESTED: {
            const TableName = process.env.REGISTRY_LOOKUP_TABLE;
            if (!TableName) {
                throw "The table name name must be set in your environment";
            }
            const Item = {
                identityType: "domainName",
                identityKey: domainName,
                approvalStatus: status,
                organizationId
            };
            const res = yield ddb.put({ TableName, Item }).promise();
            console.log(JSON.stringify(res));
            return null;
        }
    }
});
exports.default = updateRegistry;
//# sourceMappingURL=index.js.map