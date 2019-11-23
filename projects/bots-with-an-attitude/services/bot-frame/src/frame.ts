import { Machine } from "xstate";
import { BotContext } from "./interfaces";
import * as actions from "./actions";
import * as guards from "./guards";
import controller from "./controller";

const createBotMachine = () => {
  return Machine<BotContext>(
    {
      id: "bot",
      initial: "idle",
      context: {
        health: "UNKNOWN",
        controller,
        decks: [{}, {}, {}]
      },
      states: {
        idle: {
          entry: ["initializeDecks", "sendMessage"],
          on: {
            DECK_INITIALIZED: {
              target: "initialized",
              actions: "echo"
            },
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
    },
    {
      guards,
      actions
    }
  );
};

export default createBotMachine;
