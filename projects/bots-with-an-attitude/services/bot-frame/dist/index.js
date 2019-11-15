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
const test_1 = __importDefault(require("./cassettes/test"));
const Cassette_1 = __importDefault(require("./Cassette"));
const SYSTEM = "system";
const COMMANDS = "commands";
class BWA {
    static readFromMemory(memory, key) {
        const promise = new Promise(function (resolve) {
            memory.get(key).once((data) => {
                resolve(data);
            });
        });
        return promise;
    }
    constructor(cassettes) {
        this.db = new gun_1.default();
        this.memory = this.db.get(SYSTEM);
        this.controller = new botkit_1.Botkit({
            webhook_uri: "/api/messages",
            adapter: new botbuilder_adapter_web_1.WebAdapter()
        });
        this.cassettes = this.insertCassettes(cassettes);
        this.updateSystem();
        this.welcome();
        this.listen();
    }
    welcome() {
        this.controller.on('join', (bot) => __awaiter(this, void 0, void 0, function* () {
            bot.say("Hello stranger!");
            bot.say("Available commands for this bot are:");
            bot.say(yield BWA.readFromMemory(this.memory, COMMANDS));
        }));
    }
    updateSystem() {
        const commands = this.cassettes.map(({ verb }) => verb);
        this.memory.put({ commands });
    }
    insertCassettes(cassettes) {
        return cassettes.map((cassette) => new Cassette_1.default(Object.assign({}, cassette, { memory: this.db })));
    }
    listen() {
        this.cassettes.forEach(({ verb, run }) => {
            this.controller.hears(verb, 'message', (bot, message) => __awaiter(this, void 0, void 0, function* () {
                const { results } = yield run();
                yield bot.reply(message, results.join(" "));
            }));
        });
    }
}
new BWA([test_1.default]);
//# sourceMappingURL=index.js.map