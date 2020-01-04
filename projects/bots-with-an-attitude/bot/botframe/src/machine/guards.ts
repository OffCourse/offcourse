import { ConditionPredicate } from "xstate";
import { BWAContext, BWAEvent } from "../types";

export const isRightPayload: ConditionPredicate<BWAContext, any> = (
  _context,
  { data }
) => {
  return data.cassettes.length <= 3 && data.cassettes.length >= 1;
};

export const isBotTooFull: ConditionPredicate<BWAContext, BWAEvent> = (
  context,
  _event
) => {
  return context.cassettes.length > 3;
};

export const isBotFull: ConditionPredicate<BWAContext, BWAEvent> = (
  context,
  _event
) => {
  return context.cassettes.length === 3;
};
