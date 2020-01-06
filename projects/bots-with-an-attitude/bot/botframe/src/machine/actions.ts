import { assign } from "xstate";
import { BWAContext, BWAEvent } from "../types";

export const initialize = assign<BWAContext, BWAEvent>({
  botName: (_context, { botName }: any) => botName,
  cassettes: (_context, { cassettes }: any) => {
    return cassettes ? cassettes : [];
  }
});

export const setStats = assign<BWAContext, BWAEvent>({
  stats: (_context, event) => {
    return event.stats;
  }
});

export const setError = assign<BWAContext, BWAEvent>({
  error: (_context, { type }) => {
    switch (type) {
      case "INITIALIZED": {
        return "invalid config";
      }
      case "FETCHED_STATS": {
        return "invalid stats";
      }
      default: {
        return "oops";
      }
    }
  }
});

export const ejectAllCassettes = assign<BWAContext, BWAEvent>({
  cassettes: undefined,
  stats: undefined,
  error: undefined
});
