import "graphql-import-node";
import { ApolloServer } from "apollo-server-lambda";
import resolvers from "../resolvers";
import typeDefs from "../schema";
import context from "../context";
import { Handler } from "aws-lambda";
import { PendingOrganization } from "../generated/graphql";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  introspection: true,
  playground: {
    endpoint: "/dev/graphql"
  }
});

export const graphql = server.createHandler();

export const approve: Handler = (event, _context, callback) => {
  callback(null, event);
};

export const echo: Handler<{ detail: PendingOrganization }> = (
  { detail },
  _context,
  callback
) => {
  console.log("ORGANIZATION: ", JSON.stringify(detail, null, 2));
  callback(null, detail);
};
