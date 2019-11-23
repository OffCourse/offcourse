import { Machine } from "xstate";
import * as actions from "./actions";
import { TapeDeckContext } from "../interfaces";

export const tapeDeck = ({ controller, index }: TapeDeckContext) => {
  return Machine<TapeDeckContext & { cassette: string | null }>(
    {
      id: "tapeDeck",
      context: {
        index,
        controller,
        cassette: null
      },
      initial: "idle",
      states: {
        idle: {
          on: {
            POWER_ON: {
              target: "empty",
            }
          },
        },
        empty: {
          entry: "register",
          on: {
            INSERT: {
              target: "loaded",
              actions: "insertTape"
            },
            POWER_OFF: {
              target: "idle"
            }
          }
        },
        loaded: {
          on: {
            RECORD: {
              target: "recording"
            },
            EJECT: {
              target: "empty"
            }

          }
        },
        recording: {
          entry: "listen",
          on: {
            STOP: {
              target: "loaded"
            }
          }
        }
      }
    },
    {
      actions
    }
  );
};

export default tapeDeck;
