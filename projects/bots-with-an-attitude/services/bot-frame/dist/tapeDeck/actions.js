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
exports.register = xstate_1.sendParent("DECK_INITIALIZED");
exports.echo = (context, event) => {
    console.log("CONTEXT: ", context);
    console.log("EVENT: ", event);
};
exports.welcome = ({ controller }) => {
    controller.on("join", (bot) => __awaiter(this, void 0, void 0, function* () {
        bot.say("Hello stranger!");
    }));
};
exports.listen = ({ controller, index, cassette }) => {
    controller.hears("hello", "direct_mention", (bot, message) => __awaiter(this, void 0, void 0, function* () {
        console.log(message);
        yield bot.reply(message, "Hello yourself!");
    }));
    const { verb } = cassette;
    controller.hears(verb, ["message", "direct_message"], (bot, message) => __awaiter(this, void 0, void 0, function* () {
        yield bot.reply(message, `HELLO WORLD ${index}`);
    }));
};
exports.insertTape = xstate_1.assign({
    cassette: (_context, { payload }) => payload.cassette
});
//# sourceMappingURL=actions.js.map