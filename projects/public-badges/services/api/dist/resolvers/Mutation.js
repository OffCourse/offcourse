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
const timeout = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};
const { ORGANIZATION_REGISTRATION_REQUESTED, BADGE_ISSUANCE_REQUESTED } = events_js_1.PublicBadgesEventType;
const Mutation = {
    applyForBadge(_root, { input }, { stores, eventBus }) {
        return __awaiter(this, void 0, void 0, function* () {
            const { valueCaseId, domainName } = input;
            const organization = yield stores.registry.fetch({ domainName });
            if (!organization) {
                throw "ORG DOES NOT EXISTS";
            }
            const valueCase = yield stores.valueCase.fetch({ valueCaseId });
            if (!valueCase) {
                throw "ValueCase does not exist";
            }
            const badgeId = v1_1.default();
            const status = graphql_js_1.PublicBadgeStatus.Pending;
            const { name, tags, description, narrative } = valueCase;
            const { organizationId: recipientId } = organization;
            return eventBus.put({
                detailType: BADGE_ISSUANCE_REQUESTED,
                detail: {
                    badgeId,
                    status,
                    valueCaseId,
                    name,
                    tags,
                    description,
                    narrative,
                    recipientId
                }
            });
        });
    },
    registerOrganization(_root, { input }, { eventBus, stores }) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, contact, admin, domainName } = input;
            /**
               just to make sure, the registry is updated to avoid duplicates.
               It's highly unlikely (and relatively innocent) but still...
               The unavoidable perils of async ;-)
            **/
            yield timeout(500);
            const organization = yield stores.registry.fetch({ domainName });
            if (organization) {
                throw "ORG ALREADY EXISTS";
            }
            const organizationId = v1_1.default();
            const status = graphql_js_1.OrganizationStatus.Pending;
            return eventBus.put({
                detailType: ORGANIZATION_REGISTRATION_REQUESTED,
                detail: {
                    organizationId,
                    status,
                    name,
                    contact,
                    admin,
                    domainName,
                    urls: [domainName]
                }
            });
        });
    }
};
exports.default = Mutation;
//# sourceMappingURL=Mutation.js.map