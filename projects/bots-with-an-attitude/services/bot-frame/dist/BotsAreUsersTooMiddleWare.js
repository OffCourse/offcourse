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
class SlackMessageTypeMiddleware extends botbuilder_1.MiddlewareSet {
    onTurn(context, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (context.activity.type === 'message' && context.activity.channelData) {
                let adapter = context.adapter;
                const bot_user_id = yield adapter.getBotUserByTeam(context.activity);
                var mentionSyntax = '<@' + bot_user_id + '(\\|.*?)?>';
                var mention = new RegExp(mentionSyntax, 'i');
                var direct_mention = new RegExp('^' + mentionSyntax, 'i');
                if (context.activity.channelData.type == 'block_actions') {
                    context.activity.channelData.botkitEventType = 'block_actions';
                }
                else if (context.activity.channelData.type == 'interactive_message') {
                    context.activity.channelData.botkitEventType = 'interactive_message';
                }
                else if (context.activity.channelData.channel_type && context.activity.channelData.channel_type === 'im') {
                    context.activity.channelData.botkitEventType = 'direct_message';
                    context.activity.text = context.activity.text.replace(direct_mention, '')
                        .replace(/^\s+/, '').replace(/^:\s+/, '').replace(/^\s+/, '');
                }
                else if (bot_user_id && context.activity.text && context.activity.text.match(direct_mention)) {
                    context.activity.channelData.botkitEventType = 'direct_mention';
                    context.activity.text = context.activity.text.replace(direct_mention, '')
                        .replace(/^\s+/, '').replace(/^:\s+/, '').replace(/^\s+/, '');
                }
                else if (bot_user_id && context.activity.text && context.activity.text.match(mention)) {
                    context.activity.channelData.botkitEventType = 'mention';
                }
                else {
                    // this is an "ambient" message
                }
            }
            yield next();
        });
    }
}
exports.SlackMessageTypeMiddleware = SlackMessageTypeMiddleware;
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
                delete context.activity.channelData.subtype;
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
                console.log("SHOULDNT APPEAR:", context.activity);
                context.activity.type = botbuilder_1.ActivityTypes.Message;
            }
            console.log(context.activity);
            console.log("----");
            yield next();
        });
    }
}
exports.BotsAreUsersTooMiddleWareLast = BotsAreUsersTooMiddleWareLast;
//# sourceMappingURL=BotsAreUsersTooMiddleWare.js.map