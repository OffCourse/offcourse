import "graphql-import-node";
import { interpret } from "xstate";
import BWAMachine from "./machine";
import { EventType, BWAService } from "./types";
import * as actions from "./machine/actions";
import * as guards from "./machine/guards";
export { BWAService };

export type BotConfig = {
  initialState?: string;
};

const init: (config: BotConfig) => BWAService = ({
  initialState = "idle"
}: BotConfig) => {
  const machine = BWAMachine.withConfig({ actions, guards });
  const interpreter = interpret(machine).start(initialState);
  return {
    get context() {
      return interpreter.state.context;
    },
    reset: () => interpreter.send({ type: EventType.Reset }),
    initialize() {
      interpreter.send({ type: EventType.Initialized });
    },
    insertCassette() {
      interpreter.send({ type: "INSERT_CASSETTE", cassette: "HELLO" });
    }
  };
};

export { init };
