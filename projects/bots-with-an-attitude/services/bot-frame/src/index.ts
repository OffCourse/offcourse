import { WebAdapter } from "botbuilder-adapter-web";
import Gun from "gun";
import { Botkit } from "botkit";
import { ICassette, DBSchema, SYSTEM, COMMANDS, MESSAGE, JOIN } from "./interfaces";
import testCassette from "./cassettes/test";
import Cassette from "./Cassette";
import _ from "gun/lib/then";

class BWA {
  readonly controller: any;
  private cassettes: ICassette[];
  readonly memory: any;

  constructor(cassettes: ICassette[]) {
    const db = new Gun<DBSchema>();
    this.memory = db.get(SYSTEM);
    this.controller = new Botkit({
      webhook_uri: "/api/messages",
      adapter: new WebAdapter()
    });

    this.cassettes = cassettes.map(
      cassette =>
        new Cassette({
          memory: db,
          ...cassette
        })
    );

    this.updateSystem();

    this.firstContact();
    this.listen();
  }

  firstContact() {
    this.controller.on(JOIN, async (bot: any) => {
      bot.say("Hello stranger!");
      bot.say("Available commands for this bot are:");
      bot.say(await this.memory.get(COMMANDS).then());
    });
  }

  updateSystem() {
    const commands = this.cassettes.map(({ verb }) => verb);
    this.memory.put({ commands });
  }

  listen() {
    this.cassettes.forEach(({ verb, run }) => {
      this.controller.hears(verb, MESSAGE, async (bot: any, message: any) => {
        const { results } = await run();
        await bot.reply(message, results.join(" "));
      });
    });
  }
}

new BWA([testCassette]);
