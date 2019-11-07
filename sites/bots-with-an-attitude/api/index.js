const { WebAdapter } = require("botbuilder-adapter-web");
const { Botkit } = require("botkit");

const adapter = new WebAdapter();
const controller = new Botkit({
  webhook_uri: "/api/messages",
  adapter
});

controller.on("message", async (bot, message) => {
  console.log(message);
  await bot.reply(message, "I received an event of type " + message.type);
});
