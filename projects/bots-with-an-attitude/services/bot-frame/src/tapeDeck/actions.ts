import { assign, sendParent } from "xstate";
export const register = sendParent("DECK_INITIALIZED");

export const echo = (context: any, event: any) => {
  console.log("CONTEXT: ", context);
  console.log("EVENT: ", event);
};

export const welcome = ({ controller }: any) => {
  controller.on("join", async (bot: any) => {
    bot.say("Hello stranger!");
  })
};

export const listen = ({ controller, index, cassette }: any) => {
  const { verb, run } = cassette;
  controller.hears(verb, "message", async (bot: any, message: any) => {
    console.log(verb);
    await bot.reply(message, `HELLO WORLD ${index}`);
  });
}

export const insertTape = assign({
  cassette: (_context: any, { payload }: any) => payload.cassette
});
