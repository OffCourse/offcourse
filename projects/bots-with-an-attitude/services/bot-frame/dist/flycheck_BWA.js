"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const botkit_1 = require("botkit");
const botbuilder_adapter_web_1 = require("botbuilder-adapter-web");
const Cassette_1 = __importDefault(require("./Cassette"));
const helpers_1 = require("./helpers");
class BWA {
    constructor({ cassettes }) {
        this.cassettes = cassettes.map(this.insertCassette);
        this.controller = new botkit_1.Botkit({
            webhook_uri: "/api/messages",
            adapter: new botbuilder_adapter_web_1.WebAdapter()
        });
    }
    insertCassette(cassette) {
        return new Cassette_1.default(cassette);
    }
    listen() {
        this.cassettes.forEach((_a) => {
            var { run } = _a, cassette = __rest(_a, ["run"]);
            this.controller.hears(helpers_1.createRegex(cassette), "message", (bot, message) => __awaiter(this, void 0, void 0, function* () {
                const matchedObject = message.matches[1];
                const { verb, results } = yield run({
                    objectType: matchedObject
                });
                yield bot.reply(message, helpers_1.formatter({
                    verb,
                    object: matchedObject,
                    objects: [],
                    results
                }));
            }));
        });
    }
}
exports.default = ({ cassettes }) => new BWA({ cassettes });
//# sourceMappingURL=flycheck_BWA.js.map