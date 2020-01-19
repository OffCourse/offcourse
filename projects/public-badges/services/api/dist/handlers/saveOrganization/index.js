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
const putOrganization_1 = __importDefault(require("./putOrganization"));
const events_js_1 = require("../../types/events.js");
const graphql_1 = require("../../types/generated/graphql");
const saveOrganization = ({ detailType, detail }) => __awaiter(void 0, void 0, void 0, function* () {
    const { organizationId: id } = detail;
    switch (detailType) {
        case events_js_1.PublicBadgesEventType.ORGANIZATION_REGISTRATION_REQUESTED: {
            const organization = Object.assign(Object.assign({}, detail), { status: graphql_1.OrganizationStatus.Pending });
            yield putOrganization_1.default(id, organization);
            return {
                detailType: events_js_1.PublicBadgesEventType.ORGANIZATION_APPROVAL_REQUESTED,
                detail: organization
            };
        }
        case events_js_1.PublicBadgesEventType.ORGANIZATION_APPROVAL_ACCEPTED: {
            const organization = Object.assign(Object.assign({}, detail), { status: graphql_1.OrganizationStatus.Approved, approvedBy: "yeehaa@fasljfsd.com", approvedOn: `${Date.now()}` });
            yield putOrganization_1.default(id, organization);
            return {
                detailType: events_js_1.PublicBadgesEventType.ORGANIZATION_APPROVED,
                detail: organization
            };
        }
    }
});
exports.default = saveOrganization;
//# sourceMappingURL=index.js.map