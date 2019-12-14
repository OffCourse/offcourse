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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stores = __importStar(require("./stores"));
const aws_sdk_1 = __importDefault(require("aws-sdk")); // eslint-disable-line import/no-extraneous-dependencies
const eventBridge = new aws_sdk_1.default.EventBridge({ region: 'us-east-1' });
const eventBus = {
    put({ eventType, payload }) {
        return __awaiter(this, void 0, void 0, function* () {
            const reply = yield eventBridge
                .putEvents({
                Entries: [
                    {
                        Source: "public-badges.api-handler",
                        DetailType: eventType,
                        Detail: JSON.stringify(payload, null, 2)
                    }
                ]
            })
                .promise();
            console.log(reply);
            return payload;
        });
    }
};
const context = { stores, eventBus };
exports.default = context;
//# sourceMappingURL=context.js.map