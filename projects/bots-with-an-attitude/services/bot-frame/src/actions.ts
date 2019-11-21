import { send, spawn, assign } from "xstate";
import { BotContext } from "./interfaces";
import tapeDeck from "./tapeDeck";

export const welcome = ({ controller, cassettes }: BotContext) => {
  controller.on("join", async (bot: any) => {
    const commands = cassettes.map(({ verb }) => verb);
    bot.say("Hello stranger!");
    bot.say("Available commands for this bot are:");
    bot.say(commands.length ? `${commands.join(", ")}` : "none yet");
  })
};

export const echo = (_context: BotContext, event: any) => {
  console.log(event);
};

export const playCassette = send("PLAY", {
  to: (_context: any, { cassette }: any) =>
    `cassette-${cassette.verb}`
});

export const assignHealth = assign({ health: (_context: BotContext, { data }: any) => data })

export const insertCassette = assign({
  cassettes: ({ cassettes, controller }: any, { cassette }: any) => {
    const verb = cassette.verb;
    return [
      ...cassettes,
      {
        verb,
        ref: spawn(tapeDeck({ cassette, controller }), `cassette-${verb}`)
      }
    ];
  }
});
