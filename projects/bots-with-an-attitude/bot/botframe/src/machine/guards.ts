import { ConditionPredicate } from "xstate";
import { BWAContext, BWAEvent } from "../types";

export const cassettesValid: ConditionPredicate<BWAContext, BWAEvent> = (
  { cassettes },
  _event,
  { cond }: any
) => {
  const { minLength = 0, maxLength = 3 } = cond;
  return cassettes.length >= minLength && cassettes.length <= maxLength;
};
