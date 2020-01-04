import { StateValueMap, StateValue } from "xstate";

export enum BWAEventType {
  INSERT_CASSETTE = "INSERT_CASSETTE",
  RESET = "RESET",
  INITIALIZED = "INITIALIZED"
}

export interface BWAEvent {
  type: BWAEventType;
  cassette?: string;
  cassettes?: string[];
  botId?: string;
}

export type BWAStats = {
  health: number;
};

export type BWAContext = {
  botId: string | null;
  cassettes: any[];
  stats: BWAStats | null;
  error: string | null;
};

export type BWAStateContext = {
  states: {
    dormant: {};
    loading: {};
    check: {};
    operational: {};
    crashed: {};
  };
};
export type BWATestStateContext = {
  states: {
    idle: {};
    operational: {};
    crashed: {};
  };
};

export type BWAService = {
  currentState: StateValue;
  context: BWAContext;
  initialize: (config: { cassettes: any[]; botId: string }) => void;
  reset: () => void;
  insertCassette: (cassette: string) => void;
};
