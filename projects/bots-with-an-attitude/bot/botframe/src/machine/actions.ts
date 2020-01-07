import { assign } from "xstate";
import { BWAContext, BWAEvent } from "../types";

export const initialize = assign<BWAContext, BWAEvent>({
  botName: (_context, { payload }: any) => payload.botName,
  cassettes: (_context, { payload }: any) => {
    return payload.cassettes ? payload.cassettes : [];
  }
});

export const setStats = assign<BWAContext, BWAEvent>({
  stats: (_context, { payload }: any) => {
    return payload.stats;
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

export const reset = assign<BWAContext, BWAEvent>({
  cassettes: undefined,
  stats: undefined,
  error: undefined
});
