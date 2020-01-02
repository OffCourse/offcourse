import { EventType } from "../types/generated/graphql";

export type BWAEvent = {
  type: EventType | "INSERT_CASSETTE";
  cassette?: string;
};
export { EventType };

export type BWAContext = {
  cassettes: any[];
};

export type BWAStateContext = {
  states: {
    idle: {};
    operational: {};
    crashed: {};
  };
};

export type BWAService = {
  insertCassette: () => void;
  reset: () => void;
  context: BWAContext;
};
