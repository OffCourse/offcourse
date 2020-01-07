import { Resolvers, ApiEventType } from "../types/generated/graphql";
import { BWAEventType } from "@bwa/botframe/dist/types";

const resolvers: Resolvers = {
  Query: {
    getStatus(_, __, { state }) {
      return state;
    }
  },
  Mutation: {
    sendEvent(_, { event }, { send }) {
      console.log(event.payload);
      switch (event.eventType) {
        case ApiEventType.Initialized: {
          return send({
            type: BWAEventType.INITIALIZED,
            payload: event.payload!
          });
        }
        case ApiEventType.Reset: {
          return send({
            type: BWAEventType.RESET
          });
        }
      }
    }
  },
  Status: {
    currentState({ value }) {
      return value as string;
    },
    toJSON(state: any) {
      return JSON.stringify(state, null, 2);
    },
    affordances({ nextEvents }) {
      return nextEvents;
    }
  }
};

export default resolvers;
