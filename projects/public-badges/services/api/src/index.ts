import "graphql-import-node";
import { ApolloServer } from "apollo-server-lambda";
import * as schema from "./schema.graphql";
import { badges } from "./fixtures";
import { Resolvers } from "./generated/graphql";

const typeDefs = schema;
const resolvers: Resolvers = {
  Query: {
    getAllBadges: () => badges,
    getBadge: (_, { badgeId }, __) => {
      if (badgeId) {
        const badge = badges.find((badge) => badge.badgeId = badgeId);
        return badge || null;
      }
      return badges[0]
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers: resolvers as any
});

export const handler = server.createHandler();
