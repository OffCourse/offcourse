import { ConditionPredicate } from "xstate";
import { isEmpty, isNil } from "ramda";
import { BWAContext, BWAEvent } from "../types";

export const isConfigValid: ConditionPredicate<BWAContext, BWAEvent> = (
  _context,
  event
) => {
  const areCassettesPresent =
    event.cassettes &&
    event.cassettes.length <= 3 &&
    event.cassettes.length >= 1;
  const hasBotName = event.botName;
  return !!(areCassettesPresent && hasBotName);
};

export const isContextValid: ConditionPredicate<
  BWAContext,
  BWAEvent
> = context => {
  const { cassettes, stats } = context;
  const areCassettesPresent =
    cassettes && cassettes.length <= 3 && cassettes.length >= 1;
  const areStatsPresent = !isNil(stats) && !isEmpty(stats);
  const isValid = areCassettesPresent && areStatsPresent;
  return !!isValid;
};

export const areStatsValid: ConditionPredicate<BWAContext, BWAEvent> = (
  _context,
  { stats }
) => {
  return !!(stats && !isEmpty(stats));
};
