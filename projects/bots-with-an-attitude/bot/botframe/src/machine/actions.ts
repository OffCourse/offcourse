import { assign } from "xstate";
import { BWAContext, BWAEvent } from "../types";

export const insertCassette = assign<BWAContext, BWAEvent>({
  cassettes: ({ cassettes }, { cassette }) => {
    return [...cassettes, cassette];
  }
});
