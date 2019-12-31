import "graphql-import-node";
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

export type BotConfig = {
  initialState?: string;
};

const init = ({ initialState = "idle" }: BotConfig) => {
  return interpret(BWAMachine).start(initialState);
};

export { init };
