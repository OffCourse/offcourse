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
const machine = xstate_1.Machine({
    id: "bot",
    initial: "idle",
    states: {
        idle: {
            entry: ["initializeDecks", "sendMessage"],
            on: {
                DECK_INITIALIZED: {
                    target: "operational",
                    actions: "echo"
                }
            }
        },
        operational: {
            initial: "available",
            states: {
                available: {
                    on: {
                        INSERT_CASSETTE: [
                            {
                                target: "available",
                                actions: "insertCassette",
                                cond: "decksNotFull"
                            },
                            { target: "decks_full" }
                        ]
                    }
                },
                decks_full: {
                    entry: () => console.log("NO MORE ROOM IN THIS BOT")
                }
            }
        },
        crashed: {
            type: "final",
            entry: "echo"
        }
    }
});
exports.context = {
    health: "UNKNOWN",
    controller: null,
    decks: [{}, {}, {}]
};
exports.config = {
    guards,
    actions
};
exports.default = machine;
//# sourceMappingURL=frame.js.map