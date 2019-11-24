import { interpret } from "xstate";
import testCassette from "./cassettes/test";
import _ from "gun/lib/then";
import botMachine, { context, config } from "./frame";
import controller from "./controller";

const init = async () => {
  const machine = botMachine
    .withContext({ ...context, controller })
    .withConfig(config);

  const botService = interpret(machine).onTransition(state => {
    console.log("Transitioned:" + state.value + " " + state.changed);
  });

  botService.start();
  return botService;
};

const main = async () => {
  const botService = await init();

  botService.send("INSERT_CASSETTE", {
    cassette: testCassette
  });

  botService.send("INSERT_CASSETTE", {
    cassette: { ...testCassette, verb: "run" }
  });
  botService.send("INSERT_CASSETTE", {
    cassette: { ...testCassette, verb: "play" }
  });
  botService.send("INSERT_CASSETTE", {
    cassette: { ...testCassette, verb: "say" }
  });
};

main();
