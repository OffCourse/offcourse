import { Machine } from "xstate";
import { BotContext } from "./interfaces";
import * as actions from "./actions";
import * as guards from "./guards";

const machine = Machine<BotContext>({
  id: "bot",
  initial: "idle",
  states: {
    idle: {
      entry: ["initializeDecks", "sendMessage"],
      on: {
        DECK_INITIALIZED: {
          target: "operational",
          actions: "echo"
        }
      }
    },
    operational: {
      initial: "available",
      states: {
        available: {
          on: {
            INSERT_CASSETTE: [
              {
                target: "available",
                actions: "insertCassette",
                cond: "decksNotFull"
              },
              { target: "decks_full" }
            ]
          }
        },
        decks_full: {
          entry: () => console.log("NO MORE ROOM IN THIS BOT")
        }
      }
    },
    crashed: {
      type: "final",
      entry: "echo"
    }
  }
});

export const context: BotContext = {
  health: "UNKNOWN",
  controller: null,
  decks: [{}, {}, {}]
};

export const config = {
  guards,
  actions
};

export default machine;
