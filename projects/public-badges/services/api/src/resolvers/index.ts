import { Resolvers } from "../generated/graphql";
import Query from "./Query";
import Mutation from "./Mutation";
import Proof from "./Proof";
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
import Organization from "./Organization";
import Contact from "./Contact";

const resolvers: Resolvers = {
  ApprovedPublicBadge,
  Contact,
  Mutation,
  OpenBadge,
  OpenBadgeArtifact,
  OpenBadgeClass,
  OpenBadgeCriteria,
  OpenBadgeProof,
  OpenBadgeRecipient,
  Organization,
  Proof,
  Query,
  PublicBadge,
  RequestedPublicBadge,
  Scenario,
  SignedPublicBadge,
  ValueCase
};

export default resolvers;
