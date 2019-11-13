import { ISentence, ICassette, IBot } from "./interfaces";
import { Botkit } from "botkit";
import { WebAdapter } from "botbuilder-adapter-web";
import Cassette from "./Cassette"
import { formatter, createRegex } from "./helpers"

class BWA {
  cassettes: ICassette[]
  controller: any;

  constructor({ cassettes }: { cassettes: ICassette[] }) {
    this.cassettes = cassettes.map(this.insertCassette);
    this.controller = new Botkit({
      webhook_uri: "/api/messages",
      adapter: new WebAdapter()
    });
  }

  insertCassette(cassette: ICassette) {
    return new Cassette(cassette);
  }

  listen() {
    this.cassettes.forEach(({ run, ...cassette }) => {
      this.controller.hears(
        createRegex(cassette as ISentence),
        "message",
        async (bot: any, message: any) => {
          const matchedObject = message.matches[1];
          const { verb, results } = await run({
            objectType: matchedObject
          });

          await bot.reply(
            message,
            formatter({
              verb,
              object: matchedObject,
              objects: [],
              results
            })
          );
        });
    })
  }
}

export default ({ cassettes }: IBot) => new BWA({ cassettes })
