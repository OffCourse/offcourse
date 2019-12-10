"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Query_1 = __importDefault(require("./Query"));
const Mutation_1 = __importDefault(require("./Mutation"));
const Proof_1 = __importDefault(require("./Proof"));
const PublicBadge_1 = require("./PublicBadge");
const ValueCase_1 = require("./ValueCase");
const Organization_1 = __importDefault(require("./Organization"));
const Contact_1 = __importDefault(require("./Contact"));
const OpenBadgeArtifact_1 = __importDefault(require("./OpenBadgeArtifact"));
const resolvers = {
    Query: Query_1.default,
    Mutation: Mutation_1.default,
    Proof: Proof_1.default,
    PublicBadge: PublicBadge_1.PublicBadge,
    RequestedPublicBadge: PublicBadge_1.RequestedPublicBadge,
    ApprovedPublicBadge: PublicBadge_1.ApprovedPublicBadge,
    SignedPublicBadge: PublicBadge_1.SignedPublicBadge,
    ValueCase: ValueCase_1.ValueCase,
    Scenario: ValueCase_1.Scenario,
    Organization: Organization_1.default,
    Contact: Contact_1.default,
    OpenBadgeArtifact: OpenBadgeArtifact_1.default
};
exports.default = resolvers;
//# sourceMappingURL=index.js.map