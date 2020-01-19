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
Object.defineProperty(exports, "__esModule", { value: true });
const _types_1 = require("@types");
const PublicBadge = {
    __resolveType({ status }) {
        switch (status) {
            case _types_1.PublicBadgeStatus.Signed: {
                return "SignedPublicBadge";
            }
            case _types_1.PublicBadgeStatus.Approved: {
                return "ApprovedPublicBadge";
            }
            case _types_1.PublicBadgeStatus.Rejected: {
                return "RejectedPublicBadge";
            }
            case _types_1.PublicBadgeStatus.Pending: {
                return "PendingPublicBadge";
            }
        }
    },
    badgeId({ badgeId }) {
        return badgeId;
    },
    valueCaseId({ valueCaseId }) {
        return valueCaseId;
    },
    status({ status }) {
        return status;
    },
    valueCase({ valueCaseId }, _args, { stores }) {
        return __awaiter(this, void 0, void 0, function* () {
            const valueCase = yield stores.valueCase.fetch({
                valueCaseId: valueCaseId
            });
            if (!valueCase) {
                throw "invalid badge, no corresponding value case";
            }
            return valueCase;
        });
    },
    name({ name }) {
        return name;
    },
    tags({ tags }) {
        return tags;
    },
    description({ description }) {
        return description;
    },
    narrative({ narrative }) {
        return narrative;
    },
    recipientId({ recipientId }) {
        return recipientId;
    },
    recipient({ recipientId }, _args, { stores }) {
        return stores.registry.fetch({ organizationId: recipientId });
    }
};
exports.PublicBadge = PublicBadge;
const PendingPublicBadge = Object.assign({}, PublicBadge);
exports.PendingPublicBadge = PendingPublicBadge;
const ApprovedPublicBadge = Object.assign(Object.assign({}, PendingPublicBadge), { evidence({ evidence }) {
        return evidence;
    } });
exports.ApprovedPublicBadge = ApprovedPublicBadge;
const RejectedPublicBadge = Object.assign({}, ApprovedPublicBadge);
exports.RejectedPublicBadge = RejectedPublicBadge;
const SignedPublicBadge = Object.assign(Object.assign({}, ApprovedPublicBadge), { issuedOn({ issuedOn }) {
        return issuedOn;
    },
    expires({ expires }) {
        return expires;
    },
    artifact({ artifact }) {
        return artifact;
    } });
exports.SignedPublicBadge = SignedPublicBadge;
//# sourceMappingURL=PublicBadge.js.map