import { WebAdapter } from "botbuilder-adapter-web";
import Gun from "gun";
import { Botkit } from "botkit";
import { ICassette } from "./interfaces";
import testCassette from "./cassettes/test"
import Cassette from "./Cassette";

const SYSTEM = "system";
const COMMANDS = "commands";

class BWA {
  readonly controller: any;
  private cassettes: ICassette[];
  readonly db: any;
  readonly memory: any;

  static readFromMemory(memory: any, key: string) {
    const promise = new Promise(function(resolve) {
      memory.get(key).once((data: any) => {
        resolve(data);
      })
    });
    return promise;
  }

  constructor(cassettes: ICassette[]) {
    this.db = new Gun<{ test: { name: string }; SYSTEM: { COMMANDS: string } }>();
    this.memory = this.db.get(SYSTEM);
    this.controller = new Botkit({
      webhook_uri: "/api/messages",
      adapter: new WebAdapter()
    });
    this.cassettes = this.insertCassettes(cassettes);
    this.updateSystem();
    this.welcome();
    this.listen();
  }

  welcome() {
    this.controller.on('join', async (bot: any) => {
      bot.say("Hello stranger!");
      bot.say("Available commands for this bot are:");
      bot.say(await BWA.readFromMemory(this.memory, COMMANDS));
    });
  }

  updateSystem() {
    const commands = this.cassettes.map(({ verb }) => verb);
    this.memory.put({ commands });
  }

  insertCassettes(cassettes: ICassette[]) {
    return cassettes.map((cassette) => new Cassette({
      ...cassette, memory: this.db
    }));
  }

  listen() {
    this.cassettes.forEach(({ verb, run }) => {
      this.controller.hears(
        verb,
        'message',
        async (bot: any, message: any) => {
          const { results } = await run();
          await bot.reply(message, results.join(" "))
        })
    });
  }
}

new BWA([testCassette]);
