"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const xstate_1 = require("xstate");
const actions_1 = require("./actions");
exports.tapeDeck = ({ controller }) => {
    return xstate_1.Machine({
        id: "takeDeck",
        context: {
            controller
        },
        initial: "idle",
        states: {
            idle: {
                on: {
                    POWER_ON: {
                        target: "empty",
                        actions: actions_1.echo
                    }
                },
            },
            empty: {
                entry: [actions_1.register, actions_1.echo],
                on: {
                    INSERT: {
                        target: "full",
                        actions: actions_1.echo
                    }
                }
            },
            full: {
                entry: () => console.log("READY")
            }
        }
    });
};
exports.default = exports.tapeDeck;
//# sourceMappingURL=index.js.map