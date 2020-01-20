import * as Schema from "./Schema.graphql";
import * as Query from "./Query.graphql";
import * as Mutation from "./Mutation.graphql";
import * as PublicBadge from "./PublicBadge.graphql";
import * as ValueCase from "./ValueCase.graphql";
import * as Organization from "./Organization.graphql";
import * as OpenBadge from "./OpenBadge.graphql";
import * as Scalars from "./Scalars.graphql";

const typeDefs = [
  Schema,
  Scalars,
  Query,
  Mutation,
  OpenBadge,
  PublicBadge,
  ValueCase,
  Organization
];

export default typeDefs;
