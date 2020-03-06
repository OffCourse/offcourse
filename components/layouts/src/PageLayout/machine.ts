import { createMachine } from "xstate";
import { AppEvent, AppContext, AppState } from "@offcourse/interfaces/src";

const callToAction = {
  initial: "call_to_action_visible",
  states: {
    call_to_action_visible: {
      on: {
        HIDE_CALL_TO_ACTION: {
          target: "call_to_action_hidden"
        }
      }
    },
    call_to_action_hidden: {
      on: {
        SHOW_CALL_TO_ACTION: {
          target: "call_to_action_visible"
        }
      }
    }
  }
};

const appStateMachine = createMachine<AppContext, AppEvent, AppState>({
  id: "appState",
  initial: "default",
  states: {
    default: {
      entry: "updateLinks",
      on: {
        TOGGLE: "menuOpen"
      },
      ...callToAction
    },
    menuOpen: {
      on: { TOGGLE: "default" }
    }
  },
  on: {
    UPDATE_SECTIONS: {
      actions: ["updateSections"]
    }
  }
});

export default appStateMachine;

