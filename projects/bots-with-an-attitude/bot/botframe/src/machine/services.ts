import { ServiceConfig } from "xstate";
import { BWAContext, BWAEventType } from "../types";

const { FETCHED_STATS } = BWAEventType;

export const fetchStats: ServiceConfig<BWAContext> = () => callback => {
  return callback({
    type: FETCHED_STATS,
    payload: { stats: { health: 10 } }
  });
};
