"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const xstate_1 = require("xstate");
const gun_1 = __importDefault(require("gun"));
const actions_1 = require("./actions");
const services_1 = require("./services");
const controller_1 = __importDefault(require("./controller"));
const db = new gun_1.default();
const createBotMachine = () => {
    return xstate_1.Machine({
        id: "bot",
        initial: "idle",
        context: {
            health: "UNKNOWN",
            controller: controller_1.default,
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
    }, {
        services: {
            getHealth: services_1.getHealth
        },
        actions: {
            echo: actions_1.echo,
            welcome: actions_1.welcome,
            assignHealth: actions_1.assignHealth,
            insertCassette: actions_1.insertCassette,
            playCassette: actions_1.playCassette
        }
    });
};
exports.default = createBotMachine;
//# sourceMappingURL=flycheck_frame.js.map