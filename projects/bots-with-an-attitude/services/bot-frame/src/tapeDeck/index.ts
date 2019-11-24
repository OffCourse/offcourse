import { Machine } from "xstate";
import * as actions from "./actions";
import { TapeDeckContext } from "../interfaces";

const state = {
  id: "tapeDeck",
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
};

export const config = {
  actions
};

export const context = {
  name: null,
  index: null,
  controller: null,
  cassette: null
};

export default Machine<TapeDeckContext>(state);
