import { spawn, assign } from "xstate";
import { BotContext } from "./interfaces";
import tapeDeck from "./tapeDeck";

export const initializeDecks = assign({
  decks: ({ controller, decks }: any) => {
    return decks.map((_deck: any, index: number) => {
      const name = `deck-${index}`;
      return { name, ref: spawn(tapeDeck({ controller, index }), { name, sync: true }) }
    })
  }
});

export const sendMessage = ({ decks }: any) => {
  decks.forEach(({ ref }: any) => ref.send("POWER_ON"));
};

export const insertCassette = ({ decks }: any, { cassette }: any) => {
  const { ref } = decks.find(({ ref }: any) => ref.state.value === "empty");
  ref.send({ type: "INSERT", payload: { cassette } });
  ref.send({ type: "RECORD" });
};

export const echo = (_context: BotContext, event: any, meta: any) => {
  console.log(event);
};
