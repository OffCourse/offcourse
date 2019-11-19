import { Machine, assign } from "xstate";
import Gun from "gun";
import { Botkit } from "botkit";
import { WebAdapter } from "botbuilder-adapter-web";
import { ICassette, DBSchema } from "./interfaces";
import Cassette from "./Cassette";

const controller = new Botkit({
  webhook_uri: "/api/messages",
  adapter: new WebAdapter()
});

const db = new Gun<DBSchema>();
interface BotContext {
  health: number | string;
  cassettes: ICassette[];
}

const initialize = assign({
  health: (_: BotContext, { health }: any) => {
    console.log(health);
    return health || 100;
  }
});

interface BotContext {
  health: number | string;
  controller: any;
  cassettes: ICassette[];
}

const createBotMachine = ({ cassettes }: { cassettes: ICassette[] }) => {
  return Machine<BotContext>(
    {
      id: "bot",
      initial: "booting",
      context: {
        controller,
        health: "UNKNOWN",
        cassettes: cassettes.map(
          cassette =>
            new Cassette({
              memory: db,
              ...cassette
            })
        )
      },
      states: {
        booting: {
          on: {
            SUCCEEDED: {
              target: "booted",
              actions: "initialize"
            },
            FAILED: "crashed"
          }
        },
        booted: {
          type: "final"
        },
        crashed: {
          type: "final"
        }
      }
    },
    {
      actions: {
        initialize
      }
    }
  );
};

export default createBotMachine;
