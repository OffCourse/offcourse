import "graphql-import-node";
import { interpret } from "xstate";
import BWAMachine from "./machine";
import { BWAService } from "./types";
import * as actions from "./machine/actions";
import * as guards from "./machine/guards";
import * as services from "./machine/services";
export { BWAService };

export type BotConfig = {
  actions: any;
  guards: any;
  services: any;
};

const defaultConfig = {
  actions,
  guards,
  services
};
const init: (config?: BotConfig) => BWAService = config => {
  const botConfig = config || defaultConfig;
  const machine = BWAMachine.withConfig(botConfig);
  return interpret(machine).start();
};

export { init };
