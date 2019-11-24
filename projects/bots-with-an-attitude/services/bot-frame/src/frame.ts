import { Machine } from "xstate";
import { BotContext } from "./interfaces";
import * as actions from "./actions";
import * as guards from "./guards";

const state = {
  id: "bot",
  initial: "idle",
  states: {
    idle: {
      entry: ["initializeDecks", "sendMessage"],
      on: {
        DECK_INITIALIZED: {
          target: "initialized",
          actions: "echo"
        }
      }
    },
    initialized: {
      on: {
        INSERT_CASSETTE: [
          {
            target: "initialized",
            actions: "insertCassette",
            cond: "decksNotFull"
          },
          { target: "decks_full" }
        ]
      }
    },
    decks_full: {
      entry: () => console.log("NO MORE ROOM IN THIS BOT")
    },
    crashed: {
      type: "final",
      entry: "echo"
    }
  }
};

export const context: BotContext = {
  health: "UNKNOWN",
  controller: null,
  decks: [{}, {}, {}]
};

export const config = {
  guards,
  actions
};

export default Machine<BotContext>(state);
