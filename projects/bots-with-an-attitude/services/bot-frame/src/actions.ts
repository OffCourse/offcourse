import { spawn, assign } from "xstate";
import { BotContext } from "./interfaces";
import tapeDeck from "./tapeDeck";

export const initializeDecks = assign({
  decks: ({ controller, decks }: any) => {
    return decks.map((_deck: any, index: number) => {
      const name = `deck-${index}`;
      return { name, ref: spawn(tapeDeck({ controller }), { name, sync: true }) }
    })
  }
});

export const sendMessage = ({ decks }: any) => {
  decks.forEach(({ ref }: any) => ref.send("POWER_ON"));
}

export const insertCassette = ({ decks }: any) => {
  decks.forEach(({ ref }: any) => ref.send("INSERT"));
};

export const echo = (_context: BotContext, event: any, meta: any) => {
  console.log(event);
};

export const deckNotFull = ({ decks }: any, event: any) => {
  const emptyDecks = decks.filter(({ ref }: any) => ref.state.value === "empty");
  return emptyDecks.length > 0;
};
