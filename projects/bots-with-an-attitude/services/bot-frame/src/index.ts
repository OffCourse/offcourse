import { interpret } from "xstate";
import testCassette from "./cassettes/test";
import _ from "gun/lib/then";
import createBotMachine from "./frame";

const init = async () => {
  const botMachine = createBotMachine({ cassettes: [testCassette] });

  const botService = interpret(botMachine).onTransition(state => {
    console.log("Transitioned:" + state.value);
    console.log(state.context);
  });

  const cassettes = botService.state.context.cassettes;
  const controller = botService.state.context.controller;

  botService.start();
  const promise = () => new Promise((resolve) => resolve(5555))
  const health = await promise();

  botService.send({ type: "SUCCEEDED", health });

  controller.on("join", async (bot: any) => {
    const commands = cassettes.map(({ verb }) => verb);
    bot.say("Hello stranger!");
    bot.say("Available commands for this bot are:");
    bot.say(commands.length ? `${commands}` : "none yet");
  });

  cassettes.forEach(({ verb, run }) => {
    controller.hears(verb, "message", async (bot: any, message: any) => {
      const { results } = await run();
      await bot.reply(message, results.join(" "));
    });
  });
}

init();
