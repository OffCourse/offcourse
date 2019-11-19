import { interpret } from "xstate";
import testCassette from "./cassettes/test";
import _ from "gun/lib/then";

import { IBotConfig } from "./interfaces";
import createBotMachine from "./frame";

const init = async (config: IBotConfig) => {
  const botMachine = createBotMachine(config);

  const botService = interpret(botMachine).onTransition(state => {
    console.log("Transitioned:" + state.value + " " + state.context.health);
  });

  botService.start();
}

init({ cassettes: [testCassette, { ...testCassette, verb: "recommend" }] });
