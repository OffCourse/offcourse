import { Machine } from "xstate";
import { assert } from "chai";
import { BWAService, BWAStateContext, BWAContext, BWAEvent } from "../types";

const BWAMachine = Machine<BWAContext, BWAStateContext, BWAEvent>({
  initial: "idle",
  context: {
    cassettes: []
  },
  states: {
    idle: {
      on: {
        INSERT_CASSETTE: [
          {
            target: "idle",
            cond: {
              type: "cassettesValid",
              maxLength: 1
            },
            actions: "insertCassette"
          },
          {
            target: "operational",
            cond: {
              type: "cassettesValid",
              maxLength: 2
            },
            actions: "insertCassette"
          },
          {
            target: "crashed",
            cond: {
              type: "cassettesValid",
              minLength: 3
            }
          }
        ]
      },
      meta: {
        test: ({ context }: BWAService) => {
          assert.isAtMost(context.cassettes.length, 3);
        }
      }
    },
    operational: {
      on: {
        RESET: "idle"
      },
      meta: {
        test: ({ context }: BWAService) => {
          assert.isAtLeast(context.cassettes.length, 1);
          assert.isAtMost(context.cassettes.length, 3);
        }
      }
    },
    crashed: {
      on: {
        RESET: "idle"
      },
      meta: {
        test: () => assert.ok(true)
      }
    }
  }
});

export default BWAMachine;
