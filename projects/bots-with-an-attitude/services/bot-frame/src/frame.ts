import { Machine } from "xstate";
import Gun from "gun";
import { Botkit } from "botkit";
import { WebAdapter } from "botbuilder-adapter-web";
import { IBotConfig, IBotContext, DBSchema } from "./interfaces";
import Cassette from "./Cassette";
import { assignHealth, initialize, listen, welcome, echo } from "./actions";
import { getHealth } from "./services";

const controller = new Botkit({
  webhook_uri: "/api/messages",
  adapter: new WebAdapter()
});

const db = new Gun<DBSchema>();

const createBotMachine = ({ cassettes }: IBotConfig) => {
  return Machine<IBotContext>(
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
          invoke: {
            src: "getHealth",
            onDone: {
              target: "booted",
              actions: ["initialize", "assignHealth"]
            },
            onError: {
              target: "crashed",
              actions: "echo"
            }
          },
        },
        booted: {
          type: "final",
          entry: ["welcome", "listen"]
        },
        crashed: {
          type: "final",
          entry: "echo"
        }
      }
    },
    {
      services: {
        getHealth
      },
      actions: {
        initialize,
        welcome,
        listen,
        echo,
        assignHealth
      }
    }
  );
};

export default createBotMachine;
