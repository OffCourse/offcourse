import { WebAdapter } from "botbuilder-adapter-web";
import { Botkit } from "botkit";
import recommendCassette from "./cassettes/recommend";
import testCassette from "./cassettes/test";
import { ICassette } from "./interfaces";

const initializeCassette: (cassette: ICassette) => void = ({ verb, objects, run }) => {
  controller.hears(
    new RegExp(`${verb} (${objects.join("|")})`, "i"),
    "message",
    async (bot, message) => {
      const matchedObject = message.matches[1];
      const recommendations = await run({
        objectType: matchedObject
      });
      await bot.reply(
        message,
        JSON.stringify(recommendations, null, 2)
      );
    });
};

const adapter = new WebAdapter();

const controller = new Botkit({
  webhook_uri: "/api/messages",
  adapter
});

[recommendCassette, testCassette].forEach(initializeCassette);

controller.on("message", async (bot, message) => {
  await bot.reply(
    message,
    `I received a message!`
  );
});
