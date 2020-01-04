import { assign } from "xstate";
import { BWAContext, BWAEvent } from "../types";
import { initialize } from "../machine/actions";

export const ejectAllCassettes = assign<BWAContext, BWAEvent>({
  cassettes: []
});

export { initialize };
