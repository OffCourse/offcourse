"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const xstate_1 = require("xstate");
const actions = __importStar(require("./actions"));
const guards = __importStar(require("./guards"));
const controller_1 = __importDefault(require("./controller"));
const createBotMachine = () => {
    return xstate_1.Machine({
        id: "bot",
        initial: "idle",
        context: {
            health: "UNKNOWN",
            controller: controller_1.default,
            decks: [{}, {}, {}]
        },
        states: {
            idle: {
                entry: ["initializeDecks", "sendMessage"],
                on: {
                    DECK_INITIALIZED: {
                        target: "initialized",
                        actions: "echo"
                    },
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
    }, {
        guards,
        actions
    });
};
exports.default = createBotMachine;
//# sourceMappingURL=flycheck_frame.js.map