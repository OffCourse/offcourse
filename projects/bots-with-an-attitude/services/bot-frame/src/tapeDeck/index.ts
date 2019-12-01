import { Machine } from "xstate";
import * as actions from "./actions";
import { TapeDeckContext } from "../interfaces";

const machine = Machine<TapeDeckContext>({
  id: "tapeDeck",
  initial: "empty",
  states: {
    empty: {
      entry: "register",
      on: {
        INSERT: {
          target: "loaded",
          actions: "insertTape"
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
});

export const config = {
  actions
};

export const context = {
  name: null,
  index: null,
  controller: null,
  cassette: null
};

export default machine;
