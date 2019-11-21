"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const xstate_1 = require("xstate");
const register = xstate_1.sendParent("CASSETTE_PLAYING");
exports.register = register;
const echo = (_context, event) => {
    console.log(event);
};
exports.echo = echo;
const welcome = ({ controller }) => {
    controller.on("join", (bot) => __awaiter(this, void 0, void 0, function* () {
        bot.say("Hello stranger!");
    }));
};
exports.welcome = welcome;
const listen = ({ controller, cassette }) => {
    const { verb, run } = cassette;
    controller.hears(verb, "message", (bot, message) => __awaiter(this, void 0, void 0, function* () {
        yield bot.reply(message, "HELLO WORLD");
    }));
};
exports.listen = listen;
//# sourceMappingURL=flycheck_actions.js.map