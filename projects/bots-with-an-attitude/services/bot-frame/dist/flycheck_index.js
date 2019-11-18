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
const test_1 = __importDefault(require("./cassettes/test"));
const frame_1 = __importDefault(require("./frame"));
const init = () => __awaiter(this, void 0, void 0, function* () {
    const botMachine = frame_1.default({ cassettes: [test_1.default] });
    const botService = xstate_1.interpret(botMachine).onTransition(state => {
        console.log("Transitioned:" + state.value);
        console.log(state.context);
    });
    const cassettes = botService.state.context.cassettes;
    const controller = botService.state.context.controller;
    botService.start();
    const promise = () => new Promise((resolve) => resolve(5555));
    const health = yield promise();
    botService.send({ type: "SUCCEEDED", health });
    controller.on("join", (bot) => __awaiter(this, void 0, void 0, function* () {
        const commands = cassettes.map(({ verb }) => verb);
        bot.say("Hello stranger!");
        bot.say("Available commands for this bot are:");
        bot.say(commands.length ? `${commands}` : "none yet");
    }));
    cassettes.forEach(({ verb, run }) => {
        controller.hears(verb, "message", (bot, message) => __awaiter(this, void 0, void 0, function* () {
            const { results } = yield run();
            yield bot.reply(message, results.join(" "));
        }));
    });
});
init();
//# sourceMappingURL=flycheck_index.js.map