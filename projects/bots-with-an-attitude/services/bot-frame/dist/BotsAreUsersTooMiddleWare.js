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
const botbuilder_1 = require("botbuilder");
class BotsAreUsersTooMiddleWareFirst extends botbuilder_1.MiddlewareSet {
    onTurn(context, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const adapter = context.adapter;
            const info = yield adapter.slack.bots.info({ bot: context.activity.channelData.bot_id });
            const bot_user_id = yield adapter.getBotUserByTeam(context.activity);
            let isTalkingToMyself = false;
            if (info.bot) {
                isTalkingToMyself = bot_user_id === info.bot.user_id;
            }
            if (context.activity.type === 'event' &&
                context.activity.channelData.subtype === "bot_message" &&
                !isTalkingToMyself) {
                context.activity.type = botbuilder_1.ActivityTypes.Message;
                context.activity.text = context.activity.channelData.text;
            }
            yield next();
        });
    }
}
exports.BotsAreUsersTooMiddleWareFirst = BotsAreUsersTooMiddleWareFirst;
class BotsAreUsersTooMiddleWareLast extends botbuilder_1.MiddlewareSet {
    onTurn(context, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (context.activity.type === 'event' &&
                context.activity.channelData.subtype === "bot_message") {
                context.activity.type = botbuilder_1.ActivityTypes.Message;
            }
            yield next();
        });
    }
}
exports.BotsAreUsersTooMiddleWareLast = BotsAreUsersTooMiddleWareLast;
//# sourceMappingURL=BotsAreUsersTooMiddleWare.js.map