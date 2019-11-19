import { assign } from "xstate";
import { IBotContext } from "./interfaces";

export const initialize = assign({
  health: (_: IBotContext, { health }: any) => {
    return health || 100;
  }
});

export const listen = ({ controller, cassettes }: IBotContext) => {
  cassettes.forEach(({ verb, run }) => {
    controller.hears(verb, "message", async (bot: any, message: any) => {
      const { results } = await run();
      await bot.reply(message, results.join(" "));
    });
  });
}

export const welcome = ({ controller, cassettes }: IBotContext) => {
  controller.on("join", async (bot: any) => {
    const commands = cassettes.map(({ verb }) => verb);
    bot.say("Hello stranger!");
    bot.say("Available commands for this bot are:");
    bot.say(commands.length ? `${commands.join(", ")}` : "none yet");
  })
};

export const echo = (_context: IBotContext, event: any) => {
  console.log(event);
};

export const assignHealth = assign({ health: (_context: IBotContext, { data }: any) => data })
