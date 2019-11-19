"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const xstate_1 = require("xstate");
const gun_1 = __importDefault(require("gun"));
const botkit_1 = require("botkit");
const botbuilder_adapter_web_1 = require("botbuilder-adapter-web");
const Cassette_1 = __importDefault(require("./Cassette"));
const controller = new botkit_1.Botkit({
    webhook_uri: "/api/messages",
    adapter: new botbuilder_adapter_web_1.WebAdapter()
});
const db = new gun_1.default();
const initialize = xstate_1.assign({
    health: (_, { health }) => {
        console.log(health);
        return health || 100;
    }
});
const createBotMachine = ({ cassettes }) => {
    return xstate_1.Machine({
        id: "bot",
        initial: "booting",
        context: {
            controller,
            health: "UNKNOWN",
            cassettes: cassettes.map(cassette => new Cassette_1.default(Object.assign({ memory: db }, cassette)))
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
    }, {
        actions: {
            initialize
        }
    });
};
exports.default = createBotMachine;
//# sourceMappingURL=flycheck_frame.js.map