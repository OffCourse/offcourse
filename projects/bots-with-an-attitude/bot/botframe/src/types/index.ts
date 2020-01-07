import { Interpreter } from "xstate";
import { BwaConfig } from "./generated/graphql";

export enum BWAEventType {
  INITIALIZED = "INITIALIZED",
  RESET = "RESET",
  FETCHED_STATS = "FETCHED_STATS"
}

export type BWAStats = {
  health: number;
};

export interface BWAEvent {
  type: BWAEventType;
  payload?: BwaConfig | { stats: BWAStats };
}

export type BWAContext = {
  botName: string | undefined;
  cassettes: any[] | undefined;
  stats: BWAStats | undefined;
  error: string | undefined;
};

export type BWAStateContext = {
  states: {
    dormant: {};
    arising: {};
    alive: {};
    maintenance: {};
  };
};

export type BWAState =
  | {
      value: "dormant";
      context: BWAContext;
    }
  | { value: "arising"; context: Required<BWAContext> }
  | {
      value: "alive";
      context: Required<BWAContext>;
    }
  | {
      value: "maintenance";
      context: BWAContext;
    };

export type BWAService = Interpreter<BWAContext, BWAState, BWAEvent>;
