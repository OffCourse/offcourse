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
}

export type BWAContext = {
  cassettes: any[];
};

export type BWAStateContext = {
  states: {
    idle: {};
    loading: {};
    maintenance: {};
    operational: {};
    crashed: {};
  };
};
export type BWATestStateContext = {
  states: {
    idle: {};
    maintenance: {};
    operational: {};
    crashed: {};
  };
};

export type BWAService = {
  currentState: StateValue;
  context: BWAContext;
  initialize: () => void;
  reset: () => void;
  insertCassette: (cassette: string) => void;
};
