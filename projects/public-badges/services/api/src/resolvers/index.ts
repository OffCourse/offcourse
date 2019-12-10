import { Resolvers } from "../generated/graphql";
import Query from "./Query";
import Mutation from "./Mutation";
import Proof from "./Proof";
import {
  PublicBadge,
  RequestedPublicBadge,
  ApprovedPublicBadge,
  SignedPublicBadge
} from "./PublicBadge";
import { ValueCase, Scenario } from "./ValueCase";
import Organization from "./Organization";
import Contact from "./Contact";
import OpenBadgeArtifact from "./OpenBadgeArtifact";

const resolvers: Resolvers = {
  Query,
  Mutation,
  Proof,
  PublicBadge,
  RequestedPublicBadge,
  ApprovedPublicBadge,
  SignedPublicBadge,
  ValueCase,
  Scenario,
  Organization,
  Contact,
  OpenBadgeArtifact
};

export default resolvers;
