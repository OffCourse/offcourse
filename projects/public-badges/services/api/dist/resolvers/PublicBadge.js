"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("../generated/graphql");
const PublicBadge = {
    __resolveType() {
        return "SignedPublicBadge";
    },
    badgeId({ id }) {
        return id.replace(/urn:uuid:/, "");
    },
    valueCaseId({ badge }) {
        return badge.id;
    },
    status() {
        return graphql_1.Status.Signed;
    },
    valueCase({ badge }, _args, { stores }) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield stores.valueCase.fetch({ valueCaseId: badge.id });
        });
    },
    name({ badge }) {
        return badge.name;
    },
    tags({ badge }) {
        return badge.tags;
    },
    description({ badge }) {
        return badge.description;
    },
    narrative({ badge }) {
        return badge.criteria.narrative;
    },
    recipientId({ recipient }) {
        return recipient.identity;
    }
};
exports.PublicBadge = PublicBadge;
const RequestedPublicBadge = Object.assign({}, PublicBadge);
exports.RequestedPublicBadge = RequestedPublicBadge;
const ApprovedPublicBadge = Object.assign({}, RequestedPublicBadge, { evidence({ evidence }) {
        return evidence;
    } });
exports.ApprovedPublicBadge = ApprovedPublicBadge;
const SignedPublicBadge = Object.assign({}, ApprovedPublicBadge, { issuedOn({ issuedOn }) {
        return issuedOn;
    },
    expires({ expires }) {
        return expires;
    },
    artifact(badge) {
        return badge;
    } });
exports.SignedPublicBadge = SignedPublicBadge;
//# sourceMappingURL=PublicBadge.js.map