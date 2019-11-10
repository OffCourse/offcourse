import { WebAdapter } from "botbuilder-adapter-web";
import { Botkit } from "botkit";
import recommendCassette from "./cassettes/recommend";
import testCassette from "./cassettes/test";
import { ICassette } from "./interfaces";
import Gun from "gun";

const gun = new Gun<{ person: { name: string } }>();
gun.get("person").get("name").put("Alice");

class Cassette implements ICassette {
  readonly verb: string;
  readonly objects: string[];
  readonly run: any;

  constructor({ verb, objects, run }: ICassette) {
    this.verb = verb;
    this.objects = objects;
    const db = gun;
    this.run = () => run({ db });
  }
}

const insertCassette: (cassette: ICassette) => void = cassette => {
  const { verb, objects, run } = new Cassette(cassette);
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

[recommendCassette, testCassette].forEach(insertCassette);

controller.on("message", async (bot, message) => {
  await bot.reply(
    message,
    `I received a message!`
  );
});
