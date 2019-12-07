import "graphql-import-node";
import { ApolloServer } from "apollo-server-lambda";
import * as Schema from "./schema/Schema.graphql";
import * as Query from "./schema/Query.graphql";
import * as Mutation from "./schema/Mutation.graphql";
import * as PublicBadge from "./schema/PublicBadge.graphql";
import * as Organization from "./schema/Organization.graphql";
import * as stores from "./stores";
import resolvers from "./resolvers";
import { ApolloContext } from "./types";

const context: ApolloContext = { stores };

const server = new ApolloServer({
  typeDefs: [Schema, Query, Mutation, PublicBadge, Organization],
  resolvers,
  context
});

export const handler = server.createHandler();
