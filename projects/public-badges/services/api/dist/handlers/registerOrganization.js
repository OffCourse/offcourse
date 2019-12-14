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
const events_js_1 = require("../types/events.js");
const { ORGANIZATION_APPROVAL_REQUESTED, } = events_js_1.PublicBadgesEventType;
const s3 = new aws_sdk_1.default.S3();
const eventBridge = new aws_sdk_1.default.EventBridge();
const putEvent = (eventType, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const reply = yield eventBridge
        .putEvents({
        Entries: [
            {
                Source: "public-badges.register-organization-handler",
                DetailType: eventType,
                Detail: JSON.stringify(payload, null, 2)
            }
        ]
    })
        .promise();
    console.log(reply);
    return payload;
});
const saveOrganization = (id, organization) => __awaiter(void 0, void 0, void 0, function* () {
    const Bucket = process.env.REGISTRY_BUCKET;
    if (!Bucket) {
        throw "Bucket Name is Required";
    }
    const Key = `${id}/meta.json`;
    const reply = yield s3
        .putObject({
        Bucket,
        Key,
        Body: JSON.stringify(organization, null, 2)
    })
        .promise();
    console.log(reply);
    return organization;
});
const registerOrganization = ({ detail: organization }, _context, callback) => __awaiter(void 0, void 0, void 0, function* () {
    const { organizationId: id } = organization;
    const response = yield saveOrganization(id, organization);
    const reply = yield putEvent(ORGANIZATION_APPROVAL_REQUESTED, organization);
    console.log(response, reply);
    callback(null, organization);
});
exports.default = registerOrganization;
//# sourceMappingURL=registerOrganization.js.map