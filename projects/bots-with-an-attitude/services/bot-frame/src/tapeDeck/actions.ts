import { sendParent } from "xstate";
export const register = sendParent("DECK_INITIALIZED");

export const echo = (_context: any, event: any) => {
  console.log(event);
};

export const welcome = ({ controller }: any) => {
  controller.on("join", async (bot: any) => {
    bot.say("Hello stranger!");
  })
};

export const listen = ({ controller, cassette }: any) => {
  const { verb, run } = cassette;
  controller.hears(verb, "message", async (bot: any, message: any) => {
    await bot.reply(message, "HELLO WORLD");
  });
}
