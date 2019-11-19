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
const actions_1 = require("./actions");
const services_1 = require("./services");
const controller = new botkit_1.Botkit({
    webhook_uri: "/api/messages",
    adapter: new botbuilder_adapter_web_1.WebAdapter()
});
const db = new gun_1.default();
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
    }, {
        services: {
            getHealth: services_1.getHealth
        },
        actions: {
            initialize: actions_1.initialize,
            welcome: actions_1.welcome,
            listen: actions_1.listen,
            echo: actions_1.echo,
            assignHealth: actions_1.assignHealth
        }
    });
};
exports.default = createBotMachine;
//# sourceMappingURL=flycheck_frame.js.map