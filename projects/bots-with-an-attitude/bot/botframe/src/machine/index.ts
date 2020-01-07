import { createMachine } from "xstate";
import { BWAService, BWAState, BWAContext, BWAEvent } from "../types";
import { assert } from "chai";
import { includes } from "ramda";

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
            target: "arising",
            cond: "isConfigValid",
            actions: "initialize"
          },
          {
            target: "maintenance",
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
    arising: {
      invoke: {
        id: "fetchStats",
        src: "fetchStats"
      },
      on: {
        FETCHED_STATS: [
          {
            target: "alive",
            cond: "areStatsValid",
            actions: "setStats"
          },
          {
            target: "maintenance",
            actions: "setError"
          }
        ]
      },
      meta: {
        test: ({ state: { context, value } }: BWAService) => {
          assert.strictEqual(value, "arising");
          assert.isUndefined(context.error);
          assert.isUndefined(context.stats);
          assert.isAtLeast(context.cassettes!.length, 1);
          assert.isAtMost(context.cassettes!.length, 3);
        }
      }
    },
    alive: {
      on: {
        FETCHED_STATS: [
          { target: "alive", cond: "isContextValid" },
          { target: "maintenance", actions: "setError" }
        ],
        RESET: { target: "dormant", actions: "reset" }
      },
      meta: {
        test: ({ state: { context, value } }: BWAService) => {
          assert.strictEqual(value, "alive");
          assert.isUndefined(context.error);
          assert.isObject(context.stats);
          assert.isNotEmpty(context.stats);
          assert.isAtLeast(context.cassettes!.length, 1);
          assert.isAtMost(context.cassettes!.length, 3);
        }
      }
    },
    maintenance: {
      on: {
        RESET: { target: "dormant", actions: "reset" }
      },
      meta: {
        test: ({ state: { context, value } }: BWAService) => {
          const errors = ["invalid config", "invalid stats"];
          assert.isTrue(includes(context!.error!, errors));
          assert.strictEqual(value, "maintenance");
        }
      }
    }
  }
});

export default BWAMachine;
