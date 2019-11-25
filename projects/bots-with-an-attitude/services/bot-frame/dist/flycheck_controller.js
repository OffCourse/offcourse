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
const { SlackAdapter } = require('botbuilder-adapter-slack');
require('dotenv').config();
if (!process.env.CLIENT_ID || !process.env.CLIENT_SECRET || !process.env.PORT || !process.env.VERIFICATION_TOKEN) {
    console.log('Error: Specify CLIENT_ID, CLIENT_SECRET, VERIFICATION_TOKEN and PORT in environment');
    process.exit(1);
}
else {
    console.log('Good job, you have the variables!');
}
console.log(process.env.CLIENT_SIGNING_SECRET);
console.log(process.env.BOT_TOKEN);
const adapter = new SlackAdapter({
    clientSigningSecret: process.env.CLIENT_SIGNING_SECRET,
    botToken: process.env.BOT_TOKEN
});
const controller = new botkit_1.Botkit({
    webhook_uri: "/api/messages",
    adapter
});
controller.webserver.get('/', (req, res) => {
    res.send(`This app is running Botkit ${controller.version}.`);
});
controller.webserver.get('/install', (req, res) => {
    // getInstallLink points to slack's oauth endpoint and includes clientId and scopes
    res.redirect(controller.adapter.getInstallLink());
});
controller.webserver.get('/install/auth', (req, res) => __awaiter(this, void 0, void 0, function* () {
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
        console.error('OAUTH ERROR:', err);
        res.status(401);
        res.send(err.message);
    }
}));
exports.default = controller;
//# sourceMappingURL=flycheck_controller.js.map