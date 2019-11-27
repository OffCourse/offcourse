import { Botkit } from "botkit";
import {
  SlackAdapter,
  SlackMessageTypeMiddleware,
  SlackEventMiddleware
} from "botbuilder-adapter-slack";

require('dotenv').config()

const adapter = new SlackAdapter({
  clientSigningSecret: process.env.CLIENT_SIGNING_SECRET,
  redirectUri: "/",
  botToken: process.env.BOT_TOKEN
});

adapter.use(new SlackEventMiddleware());
adapter.use(new SlackMessageTypeMiddleware());

const controller = new Botkit({
  webhook_uri: "/api/messages",
  adapter
});

controller.webserver.get("/", (_req: any, res: any) => {
  res.send(`This app is running Botkit ${controller.version}.`);
});

controller.webserver.get("/install", (_req: any, res: any) => {
  res.redirect(controller.adapter.getInstallLink());
});

controller.webserver.get("/install/auth", async (req: any, res: any) => {
  try {
    const results = await controller.adapter.validateOauthCode(req.query.code);

    console.log('FULL OAUTH DETAILS', results);

    // // Store token by team in bot state.
    // tokenCache[results.team_id] = results.bot.bot_access_token;

    // // Capture team to bot id
    // userCache[results.team_id] = results.bot.bot_user_id;

    res.json('Success! Bot installed.');

  } catch (err) {
    console.error("OAUTH ERROR:", err);
    res.status(401);
    res.send(err.message);
  }
});

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

export default controller;
