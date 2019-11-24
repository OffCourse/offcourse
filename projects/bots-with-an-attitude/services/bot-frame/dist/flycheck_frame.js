"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const xstate_1 = require("xstate");
const actions = __importStar(require("./actions"));
const guards = __importStar(require("./guards"));
const state = {
    id: "bot",
    initial: "idle",
    states: {
        idle: {
            entry: ["initializeDecks", "sendMessage"],
            on: {
                DECK_INITIALIZED: {
                    target: "initialized",
                    actions: "echo"
                }
            }
        },
        initialized: {
            on: {
                INSERT_CASSETTE: [
                    {
                        target: "initialized",
                        actions: "insertCassette",
                        cond: "decksNotFull"
                    },
                    { target: "decks_full" }
                ]
            }
        },
        decks_full: {
            entry: () => console.log("NO MORE ROOM IN THIS BOT")
        },
        crashed: {
            type: "final",
            entry: "echo"
        }
    }
};
exports.context = {
    health: "UNKNOWN",
    controller: null,
    decks: [{}, {}, {}]
};
exports.config = {
    guards,
    actions
};
exports.default = xstate_1.Machine(state);
//# sourceMappingURL=flycheck_frame.js.map