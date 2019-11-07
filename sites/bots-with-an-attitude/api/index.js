const { WebAdapter } = require("botbuilder-adapter-web");
const { Botkit } = require("botkit");
const fs = require("fs");

const adapter = new WebAdapter();
const controller = new Botkit({
  webhook_uri: "/api/messages",
  adapter
});

controller.on("message", async (bot, message) => {
  await bot.reply(
    message,
    `I received a message: ${message.text} of type ${message.type}`
  );
});
