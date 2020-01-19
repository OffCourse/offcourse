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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const ramda_1 = require("ramda");
const eventBus_1 = __importDefault(require("./eventBus"));
const api_1 = __importDefault(require("./api"));
exports.graphql = api_1.default;
const echo_1 = __importDefault(require("./echo"));
exports.echo = echo_1.default;
const services = __importStar(require("./services"));
const handler = handler => {
    return (awsEvent, _context, callback) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(awsEvent);
        const detail = awsEvent.detail;
        const detailType = awsEvent["detail-type"];
        const event = yield handler({ detailType, detail });
        if (event) {
            const reply = yield eventBus_1.default.put(event);
            callback(null, reply);
        }
        callback(null, "nothing memorable happened");
    });
};
const { saveOrganization, saveBadge, approveOrganization, updateRegistry, prepareOpenBadgeArtifact, signOpenBadgeArtifact, saveSignature, runValueCaseScenarios } = ramda_1.map(service => handler(service), services);
exports.saveOrganization = saveOrganization;
exports.saveBadge = saveBadge;
exports.approveOrganization = approveOrganization;
exports.updateRegistry = updateRegistry;
exports.prepareOpenBadgeArtifact = prepareOpenBadgeArtifact;
exports.signOpenBadgeArtifact = signOpenBadgeArtifact;
exports.saveSignature = saveSignature;
exports.runValueCaseScenarios = runValueCaseScenarios;
//# sourceMappingURL=index.js.map