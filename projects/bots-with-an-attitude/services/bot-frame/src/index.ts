import { interpret } from "xstate";
import testCassette from "./cassettes/test";
import _ from "gun/lib/then";
import createBotMachine from "./frame";

const init = async () => {
  const botMachine = createBotMachine();

  const botService = interpret(botMachine).onTransition(state => {
    console.log("Transitioned:" + state.value + " " + state.changed);
  });

  botService.start();
  botService.send("INSERT_CASSETTE", { cassette: testCassette });

  botService.send("INSERT_CASSETTE", {
    cassette: { ...testCassette, verb: "run" }
  });
  botService.send("INSERT_CASSETTE", {
    cassette: { ...testCassette, verb: "play" }
  });
  botService.send("INSERT_CASSETTE", {
    cassette:
      { ...testCassette, verb: "say" }
  });
};

init();
