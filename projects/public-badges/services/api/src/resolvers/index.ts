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
import PublicBadgeClass from "./PublicBadgeClass";
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
  PublicBadgeClass,
  Organization,
  Contact,
  OpenBadgeArtifact
};

export default resolvers;
