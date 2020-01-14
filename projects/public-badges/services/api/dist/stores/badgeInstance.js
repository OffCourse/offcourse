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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fixture_json_1 = __importDefault(require("../fixtures/fixture.json"));
const v5_1 = __importDefault(require("uuid/v5"));
const ramda_1 = require("ramda");
const graphql_js_1 = require("../generated/graphql.js");
const { badge: badgeClass, recipient, evidence, issuedOn, expires } = fixture_json_1.default;
const generateBadge = (opts) => ({
    status: graphql_js_1.PublicBadgeStatus.Signed,
    name: badgeClass.name,
    badgeId: opts.id
        ? opts.id.replace(/urn:uuid:/, "")
        : v5_1.default("waag.org", v5_1.default.DNS),
    valueCaseId: badgeClass.id,
    tags: badgeClass.tags,
    description: badgeClass.description,
    narrative: badgeClass.criteria.narrative,
    recipientId: recipient.identity,
    evidence: evidence.map((_a) => {
        var { id } = _a, proof = __rest(_a, ["id"]);
        const proofId = id.replace(/urn:uuid:/, "");
        return Object.assign(Object.assign({}, proof), { proofId });
    }),
    issuedOn: issuedOn,
    expires: expires,
    artifact: fixture_json_1.default
});
const badges = [
    generateBadge({ id: fixture_json_1.default.id }),
    ...ramda_1.times(ramda_1.partial(generateBadge, [{}]), 10)
];
const badgeInstance = {
    fetch({ badgeId }) {
        return __awaiter(this, void 0, void 0, function* () {
            const badge = badges.find(badge => badge.badgeId === badgeId);
            return badge || null;
        });
    },
    fetchAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return badges;
        });
    }
};
exports.default = badgeInstance;
//# sourceMappingURL=badgeInstance.js.map