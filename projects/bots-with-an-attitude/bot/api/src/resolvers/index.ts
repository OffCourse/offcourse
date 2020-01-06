import { Resolvers } from "../types/generated/graphql";
import { BWAEvent } from "@bwa/botframe/dist/types";

const resolvers: Resolvers = {
  Query: {
    getStatus(_, __, { state }) {
      return state;
    }
  },
  Mutation: {
    sendEvent(_, { event }, { send }) {
      return send(event as BWAEvent);
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
