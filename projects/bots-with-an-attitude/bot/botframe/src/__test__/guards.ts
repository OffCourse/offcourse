import { ConditionPredicate } from "xstate";
import { BWAContext, BWAEvent } from "../types";

export const isBotTooFull: ConditionPredicate<BWAContext, BWAEvent> = (
  context,
  _event
) => {
  return context.cassettes.length >= 3;
};

export const isBotEmpty: ConditionPredicate<BWAContext, BWAEvent> = (
  { cassettes },
  _event
) => {
  return cassettes.length <= 0;
};

export const isBotFull: ConditionPredicate<BWAContext, BWAEvent> = (
  context,
  _event
) => {
  return context.cassettes.length === 3;
};

export const isBotNotFull: ConditionPredicate<BWAContext, BWAEvent> = (
  { cassettes },
  _event
) => {
  return cassettes.length < 3;
};
