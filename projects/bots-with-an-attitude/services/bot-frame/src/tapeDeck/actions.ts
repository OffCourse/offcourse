import { assign, sendParent } from "xstate";
export const register = sendParent("DECK_INITIALIZED");

export const echo = (context: any, event: any) => {
  console.log("CONTEXT: ", context);
  console.log("EVENT: ", event);
};

export const welcome = ({ controller }: any) => {
  controller.on("join", async (bot: any) => {
    bot.say("Hello stranger!");
  });
};

export const listen = ({ controller, index, cassette }: any) => {
  controller.hears(
    "hello",
    ["direct_mention"],
    async (bot: any, message: any) => {
      try {
        const response = message.bot_id
          ? await bot.api.bots.info({ bot: message.bot_id })
          : await bot.api.users.info({ user: message.user });
        const user_id = message.bot_id
          ? response.bot.user_id
          : response.user.id;
        const greeting = Math.random() < 0.5 ? "hello" : "hi"
        await bot.reply(message, `<@${user_id}> ${greeting}`);
      } catch (e) {
        console.log(e);
      }
    }
  );
};
// const { verb } = cassette;
// controller.hears(
//   verb, ["message", "direct_message"], async (bot: any, message: any) => {
//     await bot.reply(message, `HELLO WORLD ${index}`);
//   }
// );

export const insertTape = assign({
  cassette: (_context: any, { payload }: any) => payload.cassette
});
