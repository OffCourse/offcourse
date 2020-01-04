import { ConditionPredicate } from "xstate";
import { BWAContext } from "../types";

export const isConfigValid: ConditionPredicate<BWAContext, any> = (
  _context,
  event
) => {
  const areCassettesPresent =
    event.cassettes &&
    event.cassettes.length <= 3 &&
    event.cassettes.length >= 1;
  const hasBotId = event.botId;
  return areCassettesPresent && hasBotId;
};

export const isContextValid: ConditionPredicate<BWAContext, any> = context => {
  const areCassettesPresent =
    context.cassettes.length <= 3 && context.cassettes.length >= 1;
  const areStatsValid = !!context.stats;
  return areCassettesPresent && areStatsValid;
};
