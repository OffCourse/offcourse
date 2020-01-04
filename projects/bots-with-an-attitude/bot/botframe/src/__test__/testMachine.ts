import { Machine } from "xstate";
import { assert } from "chai";
import {
  BWAService,
  BWATestStateContext,
  BWAContext,
  BWAEvent
} from "../types";

const BWAMachine = Machine<BWAContext, BWATestStateContext, BWAEvent>({
  initial: "idle",
  context: {
    botId: null,
    cassettes: [],
    stats: null,
    error: null
  },
  states: {
    idle: {
      on: {
        INITIALIZED: [
          {
            target: "operational",
            actions: "initialize",
            cond: "isConfigValid"
          },
          {
            target: "crashed"
          }
        ]
      },
      meta: {
        test: ({ context, currentState }: BWAService) => {
          assert.strictEqual(currentState, "dormant");
          assert.strictEqual(context.cassettes.length, 0);
          assert.isNotOk(context.error);
        }
      }
    },
    crashed: {
      meta: {
        test: ({ currentState, context }: BWAService) => {
          console.log(context.error);
          assert.strictEqual(currentState, "crashed");
          assert.isOk(context.error);
        }
      }
    },
    operational: {
      meta: {
        test: ({ context, currentState }: BWAService) => {
          assert.strictEqual(currentState, "operational");
          assert.isNotOk(context.error);
          assert.isObject(context.stats);
          assert.isAtLeast(context.cassettes.length, 1);
          assert.isAtMost(context.cassettes.length, 3);
        }
      }
    }
  }
});

export default BWAMachine;
