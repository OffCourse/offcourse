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
const tapeDeck_1 = __importDefault(require("./tapeDeck"));
exports.welcome = ({ controller, cassettes }) => {
    controller.on("join", (bot) => __awaiter(this, void 0, void 0, function* () {
        const commands = cassettes.map(({ verb }) => verb);
        bot.say("Hello stranger!");
        bot.say("Available commands for this bot are:");
        bot.say(commands.length ? `${commands.join(", ")}` : "none yet");
    }));
};
exports.echo = (_context, event) => {
    console.log(event);
};
exports.playCassette = xstate_1.send("PLAY", {
    to: (_context, { cassette }) => `cassette-${cassette.verb}`
});
exports.assignHealth = xstate_1.assign({ health: (_context, { data }) => data });
exports.insertCassette = xstate_1.assign({
    cassettes: ({ cassettes, controller }, { cassette }) => {
        const verb = cassette.verb;
        return [
            ...cassettes,
            {
                verb,
                ref: xstate_1.spawn(tapeDeck_1.default({ cassette, controller }), `cassette-${verb}`)
            }
        ];
    }
});
//# sourceMappingURL=actions.js.map