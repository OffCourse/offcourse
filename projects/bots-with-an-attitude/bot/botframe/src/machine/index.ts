import { createMachine } from "xstate";
import { BWAService, BWAState, BWAContext, BWAEvent } from "../types";
import { assert } from "chai";
import { isEmpty, includes } from "ramda";

const BWAMachine = createMachine<BWAContext, BWAEvent, BWAState>({
  initial: "dormant",
  context: {
    botName: undefined,
    cassettes: undefined,
    stats: undefined,
    error: undefined
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
      },
      meta: {
        test: ({ state: { context, value } }: BWAService) => {
          assert.strictEqual(value, "dormant");
          assert.isUndefined(context.stats);
          assert.isUndefined(context.error);
          assert.isUndefined(context.cassettes);
        }
      }
    },
    loading: {
      invoke: {
        id: "fetchStats",
        src: "fetchStats"
      },
      on: {
        FETCHED_STATS: [
          {
            target: "operational",
            cond: "areStatsValid",
            actions: "setStats"
          },
          {
            target: "crashed",
            actions: "setError"
          }
        ]
      },
      meta: {
        test: ({ state: { context, value } }: BWAService) => {
          assert.strictEqual(value, "loading");
          assert.isUndefined(context.error);
          assert.isUndefined(context.stats);
          assert.isAtLeast(context.cassettes!.length, 1);
          assert.isAtMost(context.cassettes!.length, 3);
        }
      }
    },
    operational: {
      on: {
        FETCHED_STATS: [
          { target: "operational", cond: "isContextValid" },
          { target: "crashed", actions: "setError" }
        ],
        RESET: { target: "dormant", actions: "ejectAllCassettes" }
      },
      meta: {
        test: ({ state: { context, value } }: BWAService) => {
          assert.strictEqual(value, "operational");
          assert.isUndefined(context.error);
          assert.isObject(context.stats);
          assert.isNotEmpty(context.stats);
          assert.isAtLeast(context.cassettes!.length, 1);
          assert.isAtMost(context.cassettes!.length, 3);
        }
      }
    },
    crashed: {
      on: {
        RESET: { target: "dormant", actions: "ejectAllCassettes" }
      },
      meta: {
        test: ({ state: { context, value } }: BWAService) => {
          const errors = ["invalid config", "invalid stats"];
          assert.isTrue(includes(context!.error!, errors));
          assert.strictEqual(value, "crashed");
        }
      }
    }
  }
});

export default BWAMachine;
