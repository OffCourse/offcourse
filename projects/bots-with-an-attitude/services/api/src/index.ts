import "graphql-import-node";
import { ApolloServer } from "apollo-server-lambda";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import { Machine, Interpreter, interpret } from "xstate";
import { EventType } from "./types/generated/graphql";

export type BWAEvent = { type: EventType };

export type BWAContext = {};
export type BWAStateContext = {
  states: {
    idle: {};
    operational: {};
    crashed: {};
  };
};
export type BWAService = Interpreter<BWAContext, BWAStateContext, BWAEvent>;

const BWAMachine = Machine<BWAContext, BWAStateContext, BWAEvent>({
  initial: "idle",
  states: {
    idle: {
      on: {
        INITIALIZED: "operational",
        ERROR: "crashed"
      }
    },
    operational: {
      on: {
        RESET: "idle"
      }
    },
    crashed: {
      on: {
        RESET: "idle"
      }
    }
  }
});

const context: BWAService = interpret(BWAMachine).start("crashed");

const server = new ApolloServer({
  typeDefs,
  introspection: true,
  context,
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
