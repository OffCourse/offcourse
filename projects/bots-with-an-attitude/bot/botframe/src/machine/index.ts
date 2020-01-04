import { Machine } from "xstate";
import { BWAStateContext, BWAContext, BWAEvent } from "../types";

const fetchContext = async () => {
  return { cassettes: ["HOOO", "HOO", "HOOO"] };
};

const BWAMachine = Machine<BWAContext, BWAStateContext, BWAEvent>({
  initial: "idle",
  context: {
    cassettes: []
  },
  states: {
    idle: {
      on: {
        INITIALIZED: "loading"
      }
    },
    loading: {
      invoke: {
        id: "getStoredContext",
        src: (_context, _event) => fetchContext(),
        onDone: [
          {
            target: "maintenance",
            cond: "isRightPayload",
            actions: "initialize"
          },
          {
            target: "crashed"
          }
        ],
        onError: {
          target: "crashed"
        }
      }
    },
    maintenance: {
      on: {
        "": [
          {
            target: "crashed",
            cond: "isBotTooFull"
          },
          {
            target: "operational",
            cond: "isBotFull"
          }
        ],
        RESET: { target: "idle", actions: "ejectAllCassettes" },
        INSERT_CASSETTE: [
          {
            target: "maintenance",
            actions: "insertCassette",
            cond: "isBotNotFull"
          }
        ]
      }
    },
    operational: {
      on: {
        RESET: { target: "idle", actions: "ejectAllCassettes" }
      }
    },
    crashed: {
      on: {
        RESET: { target: "idle", actions: "ejectAllCassettes" }
      }
    }
  }
});

export default BWAMachine;
