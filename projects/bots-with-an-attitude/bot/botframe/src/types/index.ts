import { Interpreter } from "xstate";

export enum BWAEventType {
  INSERT_CASSETTE = "INSERT_CASSETTE",
  FETCHED_STATS = "FETCHED_STATS",
  RESET = "RESET",
  INITIALIZED = "INITIALIZED"
}

export type BWAStats = {
  health: number;
};

export interface BWAEvent {
  type: BWAEventType;
  cassette?: string;
  cassettes?: string[];
  botName?: string;
  stats?: BWAStats;
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
    loading: {};
    operational: {};
    crashed: {};
  };
};

export type BWAState =
  | {
      value: "dormant";
      context: BWAContext;
    }
  | { value: "loading"; context: Required<BWAContext> }
  | {
      value: "operational";
      context: Required<BWAContext>;
    }
  | {
      value: "crashed";
      context: BWAContext;
    };

export type BWAService = Interpreter<BWAContext, BWAState, BWAEvent>;
