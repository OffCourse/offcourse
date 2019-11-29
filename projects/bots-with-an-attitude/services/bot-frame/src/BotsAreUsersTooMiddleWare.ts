import { ActivityTypes, MiddlewareSet, TurnContext } from 'botbuilder';
import {
  SlackAdapter
} from "botbuilder-adapter-slack";

export class SlackMessageTypeMiddleware extends MiddlewareSet {
  public async onTurn(context: TurnContext, next: () => Promise<any>): Promise<void> {
    if (context.activity.type === 'message' && context.activity.channelData) {
      let adapter = context.adapter as SlackAdapter;

      const bot_user_id = await adapter.getBotUserByTeam(context.activity);
      var mentionSyntax = '<@' + bot_user_id + '(\\|.*?)?>';
      var mention = new RegExp(mentionSyntax, 'i');
      var direct_mention = new RegExp('^' + mentionSyntax, 'i');

      if (context.activity.channelData.type == 'block_actions') {
        context.activity.channelData.botkitEventType = 'block_actions';
      } else if (context.activity.channelData.type == 'interactive_message') {
        context.activity.channelData.botkitEventType = 'interactive_message';
      } else if (context.activity.channelData.channel_type && context.activity.channelData.channel_type === 'im') {
        context.activity.channelData.botkitEventType = 'direct_message';

        context.activity.text = context.activity.text.replace(direct_mention, '')
          .replace(/^\s+/, '').replace(/^:\s+/, '').replace(/^\s+/, '');
      } else if (bot_user_id && context.activity.text && context.activity.text.match(direct_mention)) {
        context.activity.channelData.botkitEventType = 'direct_mention';

        context.activity.text = context.activity.text.replace(direct_mention, '')
          .replace(/^\s+/, '').replace(/^:\s+/, '').replace(/^\s+/, '');
      } else if (bot_user_id && context.activity.text && context.activity.text.match(mention)) {
        context.activity.channelData.botkitEventType = 'mention';
      } else {
        // this is an "ambient" message
      }
    }
    await next();
  }
}

export class BotsAreUsersTooMiddleWare extends MiddlewareSet {
  public async onTurn(
    context: TurnContext,
    next: () => Promise<any>
  ): Promise<any> {
    const adapter = context.adapter as SlackAdapter;
    // @ts-ignore
    const info = await adapter.slack.bots.info({ bot: context.activity.channelData.bot_id });
    const bot_user_id = await adapter.getBotUserByTeam(context.activity);
    let isTalkingToMyself = false;

    if (info.bot) {
      isTalkingToMyself = bot_user_id === info.bot.user_id;
    }

    if (
      context.activity.type === 'event' &&
      context.activity.channelData.subtype === "bot_message" &&
      !isTalkingToMyself
    ) {
      context.activity.type = ActivityTypes.Message;
      context.activity.text = context.activity.channelData.text;
      delete context.activity.channelData.subtype;
    }
    await next();
  }
}
