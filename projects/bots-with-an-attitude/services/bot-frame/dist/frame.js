"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const xstate_1 = require("xstate");
const actions_1 = require("./actions");
const createBotMachine = () => {
    return xstate_1.Machine({
        id: "bot",
        initial: "idle",
        context: {
            health: "UNKNOWN",
            controller: '',
            decks: [{}]
        },
        states: {
            idle: {
                entry: [actions_1.initializeDecks, actions_1.sendMessage],
                on: {
                    DECK_INITIALIZED: {
                        target: "initialized",
                        actions: actions_1.echo
                    },
                }
            },
            initialized: {
                on: {
                    INSERT_CASSETTE: [
                        {
                            target: "initialized",
                            actions: actions_1.insertCassette,
                            cond: actions_1.deckNotFull
                        },
                        { target: "deck_full" }
                    ]
                }
            },
            deck_full: {
                entry: () => console.log("NO MORE ROOM IN THIS BOT")
            },
            crashed: {
                type: "final",
                entry: actions_1.echo
            }
        }
    });
};
exports.default = createBotMachine;
//# sourceMappingURL=frame.js.map