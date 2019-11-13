import { WebAdapter } from "botbuilder-adapter-web";

import {
  Botkit,
} from "botkit";

// import recommendCassette from "./cassettes/recommend";
import testCassette from "./cassettes/test";
import { ISentence, ICassette } from "./interfaces";
import Cassette from "./Cassette"
import { formatter, createRegex } from "./helpers"

const adapter = new WebAdapter();
const controller = new Botkit({
  webhook_uri: "/api/messages",
  adapter
});

controller.on('join', async (bot, message) => {
  console.log(message.user)
  bot.say("hello stranger")
});

controller.on('message', async (bot, message) => {
});
