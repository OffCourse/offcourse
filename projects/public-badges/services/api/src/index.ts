import "graphql-import-node";
import { ApolloServer } from "apollo-server-lambda";
import resolvers from "./resolvers";
import typeDefs from "./schema";
import context from "./context";
import { Handler } from "aws-lambda";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context
});

export const graphql = server.createHandler();

export const approve: Handler = (event, _context, callback) => {
  callback(null, event);
};

export const echo: Handler = (event, _context, callback) => {
  console.log("EVENT:", JSON.stringify(event, null, 2));
  callback(null, event);
};
