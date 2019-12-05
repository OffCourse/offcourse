"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fixture_json_1 = __importDefault(require("./fixture.json"));
const v5_1 = __importDefault(require("uuid/v5"));
const ramda_1 = require("ramda");
const { id, recipient: { identity: recipientId }, badge: badgeClass, evidence, issuedOn, expires } = fixture_json_1.default;
const { id: badgeClassId, name, tags, description, criteria: { narrative } } = badgeClass;
// const score: BadgeScore = {
//   accountable: 0,
//   sovereign: 70,
//   userCentric: 10,
//   transparent: 10,
//   open: 10
// };
const generateBadge = opts => ({
    badgeId: opts.id || `urn:uuid:${v5_1.default("waag.org", v5_1.default.DNS)}`,
    badgeClassId,
    recipientId,
    name,
    tags,
    description,
    narrative,
    evidence,
    issuedOn,
    expires,
    artifact: {
        json: JSON.stringify(fixture_json_1.default)
    }
});
exports.badges = [
    generateBadge({ id }),
    ...ramda_1.times(ramda_1.partial(generateBadge, [{}]), 10)
];
//# sourceMappingURL=index.js.map