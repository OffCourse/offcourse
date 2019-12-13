"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Query_1 = __importDefault(require("./Query"));
const Mutation_1 = __importDefault(require("./Mutation"));
const Proof_1 = __importDefault(require("./Proof"));
const Scalars_1 = require("./Scalars");
const OpenBadge_1 = require("./OpenBadge");
const PublicBadge_1 = require("./PublicBadge");
const ValueCase_1 = require("./ValueCase");
const Organization_1 = require("./Organization");
const Contact_1 = __importDefault(require("./Contact"));
const graphql_scalars_1 = require("graphql-scalars");
const ProposedBy = {
    organizationId({ organizationId }) {
        return organizationId;
    }
};
const resolvers = {
    ApprovedPublicBadge: PublicBadge_1.ApprovedPublicBadge,
    Contact: Contact_1.default,
    Domains: Organization_1.Domains,
    EmailAddress: graphql_scalars_1.EmailAddressResolver,
    JSON: graphql_scalars_1.JSONResolver,
    Mutation: Mutation_1.default,
    OpenBadge: OpenBadge_1.OpenBadge,
    OpenBadgeArtifact: OpenBadge_1.OpenBadgeArtifact,
    OpenBadgeClass: OpenBadge_1.OpenBadgeClass,
    OpenBadgeCriteria: OpenBadge_1.OpenBadgeCriteria,
    OpenBadgeProof: OpenBadge_1.OpenBadgeProof,
    OpenBadgeRecipient: OpenBadge_1.OpenBadgeRecipient,
    Organization: Organization_1.Organization,
    ApprovedOrganization: Organization_1.ApprovedOrganization,
    PendingOrganization: Organization_1.PendingOrganization,
    Proof: Proof_1.default,
    Query: Query_1.default,
    PublicBadge: PublicBadge_1.PublicBadge,
    ProposedBy,
    RequestedPublicBadge: PublicBadge_1.RequestedPublicBadge,
    Scenario: ValueCase_1.Scenario,
    SignedPublicBadge: PublicBadge_1.SignedPublicBadge,
    GUID: graphql_scalars_1.GUIDResolver,
    ValueCase: ValueCase_1.ValueCase,
    ValueCaseID: Scalars_1.ValueCaseID
};
exports.default = resolvers;
//# sourceMappingURL=index.js.map