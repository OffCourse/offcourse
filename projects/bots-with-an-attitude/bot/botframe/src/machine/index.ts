import { Machine } from "xstate";
import { BWAStateContext, BWAContext, BWAEvent } from "../types";

const fetchStats = async (_botId: string) => {
  return { health: 50 };
};

const BWAMachine = Machine<BWAContext, BWAStateContext, BWAEvent>({
  initial: "dormant",
  context: {
    botId: null,
    cassettes: [],
    stats: null,
    error: null
  },
  states: {
    dormant: {
      on: {
        INITIALIZED: [
          {
            target: "loading",
            cond: "isConfigValid",
            actions: "initialize"
          },
          {
            target: "crashed",
            actions: "setError"
          }
        ]
      }
    },
    loading: {
      invoke: {
        id: "getStats",
        src: (context, _event) => {
          return fetchStats(context.botId);
        },
        onDone: [
          {
            target: "check",
            actions: "setStats"
          }
        ],
        onError: {
          target: "crashed",
          actions: "setError"
        }
      }
    },
    check: {
      on: {
        "": [
          { target: "operational", cond: "isContextValid" },
          { target: "crashed", actions: "setError" }
        ]
      }
    },
    operational: {
      on: {
        RESET: { target: "dormant", actions: "ejectAllCassettes" }
      }
    },
    crashed: {
      on: {
        RESET: { target: "dormant", actions: "ejectAllCassettes" }
      }
    }
  }
});

export default BWAMachine;
