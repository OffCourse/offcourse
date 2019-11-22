import { Machine, sendParent } from "xstate";
import { echo, welcome, register, listen } from "./actions";
import { TapeDeckContext } from "../interfaces";

export const tapeDeck = ({ controller }: TapeDeckContext) => {
  return Machine<TapeDeckContext>(
    {
      id: "takeDeck",
      context: {
        controller
      },
      initial: "idle",
      states: {
        idle: {
          on: {
            POWER_ON: {
              target: "empty",
              actions: echo
            }
          },
        },
        empty: {
          entry: [register, echo],
          on: {
            INSERT: {
              target: "full",
              actions: echo
            }
          }
        },
        full: {
          entry: () => console.log("READY")
        }
      }
    },
  );
}

export default tapeDeck;
