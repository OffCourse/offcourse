import { Machine } from "xstate";
import { BotContext } from "./interfaces";
import { initializeDecks, sendMessage, echo, insertCassette, deckNotFull } from "./actions";

const createBotMachine = () => {
  return Machine<BotContext>({
    id: "bot",
    initial: "idle",
    context: {
      health: "UNKNOWN",
      controller: '',
      decks: [{}]
    },
    states: {
      idle: {
        entry: [initializeDecks, sendMessage],
        on: {
          DECK_INITIALIZED: {
            target: "initialized",
            actions: echo
          },
        }
      },
      initialized: {
        on: {
          INSERT_CASSETTE: [
            {
              target: "initialized",
              actions: insertCassette,
              cond: deckNotFull
            },
            { target: "deck_full" }
          ]
        }
      },
      deck_full: {
        entry: () => console.log("NO MORE ROOM IN THIS BOT")
      },
      crashed: {
        type: "final",
        entry: echo
      }
    }
  });
};

export default createBotMachine;
