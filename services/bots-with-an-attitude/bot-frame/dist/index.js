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
const botbuilder_adapter_web_1 = require("botbuilder-adapter-web");
const botkit_1 = require("botkit");
const adapter = new botbuilder_adapter_web_1.WebAdapter();
const controller = new botkit_1.Botkit({
    webhook_uri: "/api/messages",
    adapter
});
controller.on('join', (bot, message) => __awaiter(this, void 0, void 0, function* () {
    console.log(message.user);
    bot.say("hello stranger");
}));
controller.on('message', (bot, message) => __awaiter(this, void 0, void 0, function* () {
}));
//# sourceMappingURL=index.js.map