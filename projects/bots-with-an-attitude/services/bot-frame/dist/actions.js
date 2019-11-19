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
exports.initialize = xstate_1.assign({
    health: (_, { health }) => {
        return health || 100;
    }
});
exports.listen = ({ controller, cassettes }) => {
    cassettes.forEach(({ verb, run }) => {
        controller.hears(verb, "message", (bot, message) => __awaiter(this, void 0, void 0, function* () {
            const { results } = yield run();
            yield bot.reply(message, results.join(" "));
        }));
    });
};
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
exports.assignHealth = xstate_1.assign({ health: (_context, { data }) => data });
//# sourceMappingURL=actions.js.map