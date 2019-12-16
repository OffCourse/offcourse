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
const echo_1 = __importDefault(require("./echo"));
exports.echo = echo_1.default;
const graphql_1 = __importDefault(require("./graphql"));
exports.graphql = graphql_1.default;
const saveOrganization_1 = __importDefault(require("./saveOrganization"));
const approveOrganization_1 = __importDefault(require("./approveOrganization"));
const eventBus_1 = __importDefault(require("../eventBus"));
const handler = handler => {
    return (awsEvent, _context, callback) => __awaiter(void 0, void 0, void 0, function* () {
        const detail = awsEvent.detail;
        const detailType = awsEvent["detail-type"];
        const event = yield handler({ detailType, detail });
        const reply = yield eventBus_1.default.put(event);
        callback(null, reply);
    });
};
const saveOrganization = handler(saveOrganization_1.default);
exports.saveOrganization = saveOrganization;
const approveOrganization = handler(approveOrganization_1.default);
exports.approveOrganization = approveOrganization;
//# sourceMappingURL=index.js.map