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
const botbuilder_adapter_web_1 = require("botbuilder-adapter-web");
const gun_1 = __importDefault(require("gun"));
const botkit_1 = require("botkit");
const interfaces_1 = require("./interfaces");
const test_1 = __importDefault(require("./cassettes/test"));
const Cassette_1 = __importDefault(require("./Cassette"));
class BWA {
    constructor(cassettes) {
        const db = new gun_1.default();
        this.memory = db.get(interfaces_1.SYSTEM);
        this.controller = new botkit_1.Botkit({
            webhook_uri: "/api/messages",
            adapter: new botbuilder_adapter_web_1.WebAdapter()
        });
        this.cassettes = cassettes.map(cassette => new Cassette_1.default(Object.assign({ memory: db }, cassette)));
        this.updateSystem();
        this.firstContact();
        this.listen();
    }
    firstContact() {
        this.controller.on(interfaces_1.JOIN, (bot) => __awaiter(this, void 0, void 0, function* () {
            bot.say("Hello stranger!");
            bot.say("Available commands for this bot are:");
            bot.say(yield this.memory.get(interfaces_1.COMMANDS).then());
        }));
    }
    updateSystem() {
        const commands = this.cassettes.map(({ verb }) => verb);
        this.memory.put({ commands });
    }
    listen() {
        this.cassettes.forEach(({ verb, run }) => {
            this.controller.hears(verb, interfaces_1.MESSAGE, (bot, message) => __awaiter(this, void 0, void 0, function* () {
                const { results } = yield run();
                yield bot.reply(message, results.join(" "));
            }));
        });
    }
}
new BWA([test_1.default]);
//# sourceMappingURL=flycheck_index.js.map