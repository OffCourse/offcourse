import { Botkit } from "botkit";
import { WebAdapter } from "botbuilder-adapter-web";

const controller = new Botkit({
  webhook_uri: "/api/messages",
  adapter: new WebAdapter()
});

export default controller;
