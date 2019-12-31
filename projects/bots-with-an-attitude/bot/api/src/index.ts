import { ApolloServer } from "apollo-server-lambda";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import { init } from "@bwa/botframe";

const server = new ApolloServer({
  typeDefs,
  introspection: true,
  context: init({ initialState: "idle" }),
  resolvers,
  playground: {
    endpoint: "/dev/graphql"
  }
});

export const api = server.createHandler({
  cors: {
    origin: "*",
    credentials: true
  }
});
