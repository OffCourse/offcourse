import { createMachine } from "xstate";
import * as actions from "./actions";
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

const appStateMachine = createMachine<AppContext, AppEvent, AppState>(
  {
    id: "appState",
    initial: "idle",
    states: {
      idle: {
        on: {
          INITIALIZE: {
            target: "default",
            actions: ["addSiteMetaData"]
          }
        }
      },
      default: {
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
  },
  {
    actions
  }
);

export default appStateMachine;
