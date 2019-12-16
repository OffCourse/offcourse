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
const eventBridge = new aws_sdk_1.default.EventBridge();
const eventBus = {
    put: ({ detailType, detail }) => __awaiter(void 0, void 0, void 0, function* () {
        const Source = process.env.HANDLER_NAME;
        if (!Source) {
            throw "The handler name must be set in your environment";
        }
        const DetailType = detailType;
        const Detail = JSON.stringify(detail, null, 2);
        const event = {
            Source,
            DetailType,
            Detail
        };
        console.log(event);
        const reply = yield eventBridge
            .putEvents({
            Entries: [event]
        })
            .promise();
        console.log(Source, reply);
        return detail;
    })
};
exports.default = eventBus;
//# sourceMappingURL=index.js.map