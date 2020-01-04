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
    cassettes: []
  },
  states: {
    idle: {
      on: {
        INITIALIZED: { target: "operational" }
      },
      meta: {
        test: ({ context, currentState }: BWAService) => {
          assert.strictEqual(currentState, "idle");
          assert.strictEqual(context.cassettes.length, 0);
        }
      }
    },
    crashed: {
      meta: {
        test: ({ context, currentState }: BWAService) => {
          assert.strictEqual(currentState, "crashed");
          assert.strictEqual(context.cassettes.length, 0);
        }
      }
    },
    maintenance: {
      meta: {
        test: ({ context, currentState }: BWAService) => {
          assert.strictEqual(currentState, "maintenance");
          assert.strictEqual(context.cassettes.length, 1);
          assert.strictEqual(context.cassettes.length, 3);
        }
      }
    },
    operational: {
      meta: {
        test: ({ context, currentState }: BWAService) => {
          assert.strictEqual(currentState, "operational");
          assert.strictEqual(context.cassettes.length, 3);
        }
      }
    }
  }
});

export default BWAMachine;
