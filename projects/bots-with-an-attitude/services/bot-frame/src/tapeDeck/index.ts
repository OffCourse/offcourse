import { Machine } from "xstate";
import { echo, register, welcome, listen } from "./actions";
import { TapeDeckContext } from "../interfaces";

export const tapeDeck = ({ cassette, controller }: TapeDeckContext) => {
  return Machine<TapeDeckContext>(
    {
      id: "takeDeck",
      context: {
        controller,
        cassette
      },
      initial: "paused",
      states: {
        paused: {
          on: {
            PLAY: {
              target: "playing",
              actions: ["welcome", "listen"]
            }
          }
        },
        playing: {
          entry: ["register"]
        }
      }
    },
    {
      actions: {
        echo,
        register,
        welcome,
        listen
      }
    }
  );
}

export default tapeDeck;
