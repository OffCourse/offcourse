import "graphql-import-node";
import { interpret } from "xstate";
import BWAMachine from "./machine";
import { BWAService, BWAEventType } from "./types";
import * as actions from "./machine/actions";
import * as guards from "./machine/guards";

export type BotConfig = {
  initialState?: string;
};

const init: (config: BotConfig) => BWAService = ({
  initialState = "idle"
}: BotConfig) => {
  const machine = BWAMachine.withConfig({ actions, guards });
  const interpreter = interpret(machine).start(initialState);
  return {
    get currentState() {
      return interpreter.state.value;
    },
    get context() {
      return interpreter.state.context;
    },
    initialize() {
      interpreter.send({ type: BWAEventType.INITIALIZED });
    },
    reset() {
      interpreter.send({ type: BWAEventType.RESET });
    },
    insertCassette() {
      interpreter.send({
        type: BWAEventType.INSERT_CASSETTE
      });
    }
  };
};

export { init };
