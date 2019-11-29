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
const botkit_1 = require("botkit");
const botbuilder_adapter_slack_1 = require("botbuilder-adapter-slack");
const BotsAreUsersTooMiddleWare_1 = require("./BotsAreUsersTooMiddleWare");
require('dotenv').config();
console.log(process.env.CLIENT_SIGNING_SECRET);
console.log(process.env.BOT_TOKEN);
const adapter = new botbuilder_adapter_slack_1.SlackAdapter({
    clientSigningSecret: process.env.CLIENT_SIGNING_SECRET,
    redirectUri: "/install/auth",
    botToken: process.env.BOT_TOKEN
});
adapter.use(new BotsAreUsersTooMiddleWare_1.BotsAreUsersTooMiddleWareFirst());
adapter.use(new botbuilder_adapter_slack_1.SlackEventMiddleware());
adapter.use(new botbuilder_adapter_slack_1.SlackMessageTypeMiddleware());
adapter.use(new BotsAreUsersTooMiddleWare_1.BotsAreUsersTooMiddleWareLast());
const controller = new botkit_1.Botkit({
    webhook_uri: "/api/messages",
    adapter
});
controller.webserver.get("/", (_req, res) => {
    res.send(`This app is running Botkit ${controller.version}.`);
});
controller.webserver.get("/install", (_req, res) => {
    res.redirect(controller.adapter.getInstallLink());
});
controller.webserver.get("/install/auth", (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const results = yield controller.adapter.validateOauthCode(req.query.code);
        console.log('FULL OAUTH DETAILS', results);
        // // Store token by team in bot state.
        // tokenCache[results.team_id] = results.bot.bot_access_token;
        // // Capture team to bot id
        // userCache[results.team_id] = results.bot.bot_user_id;
        res.json('Success! Bot installed.');
    }
    catch (err) {
        console.error("OAUTH ERROR:", err);
        res.status(401);
        res.send(err.message);
    }
}));
// controller.middleware.receive.use(function(bot: any, message: any, next: any) {
//   console.log('RECEIVED: ', message);
//   message.logged = true;
//   next();
// });
// controller.middleware.send.use(function(bot: any, message: any, next: any) {
//   console.log('SENT: ', message);
//   message.logged = true;
//   next();
// });
const port = process.env.PORT;
console.log(`Your port is ${port}`);
exports.default = controller;
//# sourceMappingURL=flycheck_controller.js.map