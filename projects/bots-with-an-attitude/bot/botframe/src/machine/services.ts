import { ServiceConfig } from "xstate";
import { BWAContext } from "../types";

export const fetchStats: ServiceConfig<BWAContext> = () => callback => {
  return callback({ type: "FETCHED_STATS", stats: { health: 10 } });
};
