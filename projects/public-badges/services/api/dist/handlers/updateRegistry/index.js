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
const s3 = new aws_sdk_1.default.S3({ apiVersion: "2006-03-01" });
const echo = (event, _context, callback) => __awaiter(void 0, void 0, void 0, function* () {
    const { eventName, s3: detail } = event.Records[0];
    const { bucket, object } = detail;
    const Bucket = bucket.name;
    const Key = object.key;
    const { Body } = yield s3.getObject({ Bucket, Key }).promise();
    const json = Body ? Body.toString('utf-8') : "{}";
    const { identity, status, organizationId } = JSON.parse(json);
    const res = {
        identityType: "domainName",
        identityKey: identity.domainName,
        status,
        organizationId
    };
    console.log(JSON.stringify(res));
    callback(null, event.detail);
});
exports.default = echo;
//# sourceMappingURL=index.js.map