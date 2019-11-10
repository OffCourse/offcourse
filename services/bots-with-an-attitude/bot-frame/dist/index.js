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
const botkit_1 = require("botkit");
const recommend_1 = __importDefault(require("./cassettes/recommend"));
const test_1 = __importDefault(require("./cassettes/test"));
const gun_1 = __importDefault(require("gun"));
const gun = new gun_1.default();
gun.get("person").get("name").put("Alice");
class Cassette {
    constructor({ verb, objects, run }) {
        this.verb = verb;
        this.objects = objects;
        const db = gun;
        this.run = () => run({ db });
    }
}
const insertCassette = cassette => {
    const { verb, objects, run } = new Cassette(cassette);
    controller.hears(new RegExp(`${verb} (${objects.join("|")})`, "i"), "message", (bot, message) => __awaiter(this, void 0, void 0, function* () {
        const matchedObject = message.matches[1];
        const recommendations = yield run({
            objectType: matchedObject
        });
        yield bot.reply(message, JSON.stringify(recommendations, null, 2));
    }));
};
const adapter = new botbuilder_adapter_web_1.WebAdapter();
const controller = new botkit_1.Botkit({
    webhook_uri: "/api/messages",
    adapter
});
[recommend_1.default, test_1.default].forEach(insertCassette);
controller.on("message", (bot, message) => __awaiter(this, void 0, void 0, function* () {
    yield bot.reply(message, `I received a message!`);
}));
//# sourceMappingURL=index.js.map