"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const xstate_1 = require("xstate");
const controller_1 = __importDefault(require("./controller"));
const echo = (_context, event) => {
    console.log(event);
};
const welcome = ({ controller }) => {
    controller.on("join", (bot) => __awaiter(this, void 0, void 0, function* () {
        bot.say("Hello stranger!");
    }));
};
exports.listen = ({ controller, cassette }) => {
    const { verb, run } = cassette;
    controller.hears(verb, "message", (bot, message) => __awaiter(this, void 0, void 0, function* () {
        yield bot.reply(message, "HELLO WORLD");
    }));
};
const register = xstate_1.sendParent("CASSETTE_PLAYING");
exports.tapeDeck = (cassette) => {
    return xstate_1.Machine({
        id: "takeDeck",
        context: {
            controller: controller_1.default,
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
            echo,
            register,
            welcome,
            listen: exports.listen
        }
    });
};
exports.default = exports.tapeDeck;
//# sourceMappingURL=tapeDeck.js.map