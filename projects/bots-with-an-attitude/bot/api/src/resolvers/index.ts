import { Resolvers } from "../types/generated/graphql";

const resolvers: Resolvers = {
  Query: {
    getStatus(_, __, { context }) {
      return context;
    }
  },
  Mutation: {
    sendEvent(_, { eventType }, { send }) {
      return send(eventType);
    }
  },
  Status: {
    currentState({ value }) {
      return value as string;
    },
    affordances({ nextEvents }) {
      return nextEvents;
    }
  }
};

export default resolvers;
