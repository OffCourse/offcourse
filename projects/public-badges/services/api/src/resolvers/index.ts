import { Resolvers, ProposedByResolvers } from "../generated/graphql";
import Query from "./Query";
import Mutation from "./Mutation";
import Proof from "./Proof";
import { ValueCaseID } from "./Scalars";
import {
  OpenBadgeArtifact,
  OpenBadge,
  OpenBadgeClass,
  OpenBadgeCriteria,
  OpenBadgeProof,
  OpenBadgeRecipient
} from "./OpenBadge";
import {
  PublicBadge,
  RequestedPublicBadge,
  ApprovedPublicBadge,
  SignedPublicBadge
} from "./PublicBadge";
import { ValueCase, Scenario } from "./ValueCase";
import {
  Organization,
  ApprovedOrganization,
  PendingOrganization,
  Domains
} from "./Organization";
import Contact from "./Contact";
import {
  EmailAddressResolver as EmailAddress,
  GUIDResolver as GUID,
  JSONResolver as JSON
} from "graphql-scalars";

const ProposedBy: ProposedByResolvers = {
  organizationId({ organizationId }) {
    return organizationId;
  }
}

const resolvers: Resolvers = {
  ApprovedPublicBadge,
  Contact,
  Domains,
  EmailAddress,
  JSON,
  Mutation,
  OpenBadge,
  OpenBadgeArtifact,
  OpenBadgeClass,
  OpenBadgeCriteria,
  OpenBadgeProof,
  OpenBadgeRecipient,
  Organization,
  ApprovedOrganization,
  PendingOrganization,
  Proof,
  Query,
  PublicBadge,
  ProposedBy,
  RequestedPublicBadge,
  Scenario,
  SignedPublicBadge,
  GUID,
  ValueCase,
  ValueCaseID
};

export default resolvers;
