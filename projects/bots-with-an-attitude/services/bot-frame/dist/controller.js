"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const botkit_1 = require("botkit");
const botbuilder_adapter_web_1 = require("botbuilder-adapter-web");
const controller = new botkit_1.Botkit({
    webhook_uri: "/api/messages",
    adapter: new botbuilder_adapter_web_1.WebAdapter()
});
exports.default = controller;
//# sourceMappingURL=controller.js.map