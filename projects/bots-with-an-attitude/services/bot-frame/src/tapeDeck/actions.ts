import { sendParent } from "xstate";
const register = sendParent("CASSETTE_PLAYING");

const echo = (_context: any, event: any) => {
  console.log(event);
};

const welcome = ({ controller }: any) => {
  controller.on("join", async (bot: any) => {
    bot.say("Hello stranger!");
  })
};

const listen = ({ controller, cassette }: any) => {
  const { verb, run } = cassette;
  controller.hears(verb, "message", async (bot: any, message: any) => {
    await bot.reply(message, "HELLO WORLD");
  });
}

export { echo, welcome, listen, register };
