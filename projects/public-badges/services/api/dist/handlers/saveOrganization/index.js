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
const eventBus_1 = __importDefault(require("../../eventBus"));
const putOrganization_1 = __importDefault(require("./putOrganization"));
const events_js_1 = require("../../types/events.js");
const graphql_1 = require("../../generated/graphql");
const saveOrganization = (event, _context, callback) => __awaiter(void 0, void 0, void 0, function* () {
    const detail = event.detail;
    const { organizationId: id } = detail;
    console.log(event["detail-type"]);
    switch (event["detail-type"]) {
        case events_js_1.PublicBadgesEventType.ORGANIZATION_REGISTRATION_REQUESTED: {
            const organization = Object.assign(Object.assign({}, detail), { status: graphql_1.OrganizationStatus.Pending });
            const response = yield putOrganization_1.default(id, organization);
            const reply = yield eventBus_1.default.put({
                detailType: events_js_1.PublicBadgesEventType.ORGANIZATION_APPROVAL_REQUESTED,
                detail: organization
            });
            console.log(reply);
            callback(null, id);
        }
        case events_js_1.PublicBadgesEventType.ORGANIZATION_APPROVAL_ACCEPTED: {
            const organization = Object.assign(Object.assign({}, detail), { status: graphql_1.OrganizationStatus.Approved, approvedBy: "yeehaa@fasljfsd.com", approvedOn: `${Date.now()}` });
            const reply = yield eventBus_1.default.put({
                detailType: events_js_1.PublicBadgesEventType.ORGANIZATION_APPROVED,
                detail: organization
            });
            console.log(reply);
            callback(null, id);
        }
    }
});
exports.default = saveOrganization;
//# sourceMappingURL=index.js.map