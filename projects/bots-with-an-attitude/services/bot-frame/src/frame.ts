import { Machine, spawn, assign, sendParent } from "xstate";
import Gun from "gun";
import { BotContext, DBSchema } from "./interfaces";
import { assignHealth, echo, welcome, insertCassette, playCassette } from "./actions";
import { getHealth } from "./services";
import controller from "./controller";

const db = new Gun<DBSchema>();

const createBotMachine = () => {
  return Machine<BotContext>(
    {
      id: "bot",
      initial: "idle",
      context: {
        health: "UNKNOWN",
        controller,
        cassettes: []
      },
      states: {
        idle: {
          invoke: {
            src: "getHealth",
            onDone: {
              target: "booted",
              actions: ["assignHealth"]
            },
            onError: {
              target: "crashed",
              actions: "echo"
            }
          },
        },
        booted: {
          on: {
            INSERT_CASSETTE: {
              actions: ["welcome", "insertCassette", "playCassette"]
            },
            CASSETTE_PLAYING: {
              actions: () => console.log("SUCCESS")
            }
          }
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
        echo,
        welcome,
        assignHealth,
        insertCassette,
        playCassette
      }
    }
  );
};

export default createBotMachine;
