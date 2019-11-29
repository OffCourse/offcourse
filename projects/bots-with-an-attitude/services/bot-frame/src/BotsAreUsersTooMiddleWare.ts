import { ActivityTypes, MiddlewareSet, TurnContext } from 'botbuilder';

export class BotsAreUsersTooMiddleWareFirst extends MiddlewareSet {
  public async onTurn(
    context: TurnContext,
    next: () => Promise<any>
  ): Promise<any> {
    const adapter: any = context.adapter;
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
    }
    await next();
  }
}

export class BotsAreUsersTooMiddleWareLast extends MiddlewareSet {
  public async onTurn(
    context: TurnContext,
    next: () => Promise<any>
  ): Promise<any> {
    if (
      context.activity.type === 'event' &&
      context.activity.channelData.subtype === "bot_message"
    ) {
      context.activity.type = ActivityTypes.Message;
    }
    await next();
  }
}
