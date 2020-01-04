import { assign } from "xstate";
import { BWAContext, BWAEvent } from "../types";

export const initialize = assign<BWAContext, BWAEvent>({
  botId: (_context, { botId }: any) => botId,
  cassettes: (_context, { cassettes }: any) => {
    return cassettes ? cassettes : [];
  }
});

export const setStats = assign<BWAContext, BWAEvent>({
  stats: (_context, { data: stats }: any) => stats
});

export const setError = assign<BWAContext, BWAEvent>({
  error: (_context, { type }) => {
    switch (type) {
      case "INITIALIZED": {
        return "invalid config";
      }
      default: {
        return "oops";
      }
    }
  }
});

export const ejectAllCassettes = assign<BWAContext, BWAEvent>({
  cassettes: []
});
