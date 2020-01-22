import { Resolvers } from "@types";
import Query from "./Query";
import Mutation from "./Mutation";
import * as OpenBadge from "./OpenBadge";
import * as PublicBadge from "./PublicBadge";
import * as Proof from "./Proof";
import * as Issuer from "./Issuer";
import * as ValueCase from "./ValueCase";
import * as Organization from "./Organization";
import * as Scalars from "./Scalars";

const resolvers: Resolvers = {
  Query,
  Mutation,
  ...Issuer,
  ...Proof,
  ...PublicBadge,
  ...OpenBadge,
  ...Organization,
  ...ValueCase,
  ...Scalars
};

export default resolvers;
