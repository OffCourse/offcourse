"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const xstate_1 = require("xstate");
const actions_1 = require("./actions");
exports.tapeDeck = ({ cassette, controller }) => {
    return xstate_1.Machine({
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
    }, {
        actions: {
            echo: actions_1.echo,
            register: actions_1.register,
            welcome: actions_1.welcome,
            listen: actions_1.listen
        }
    });
};
exports.default = exports.tapeDeck;
//# sourceMappingURL=flycheck_index.js.map