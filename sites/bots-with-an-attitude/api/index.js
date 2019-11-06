const { Botkit } = require("botkit");

const controller = new Botkit({
  webhook_uri: "/api/messages"
});

var webserver = require("./server.js")(controller);

controller.on("event", async (bot, message) => {
  await bot.reply(message, "I received an event of type " + message.type);
});
