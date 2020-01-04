import { assign } from "xstate";
import { BWAContext, BWAEvent } from "../types";

export const initialize = assign<BWAContext, BWAEvent>({
  cassettes: ({ cassettes }, { data }: any) => {
    if (data.cassettes) {
      return [...data.cassettes];
    } else {
      return cassettes;
    }
  }
});

export const insertCassette = assign<BWAContext, BWAEvent>({
  cassettes: ({ cassettes }, { cassette }) => {
    if (cassette) {
      return [...cassettes, cassette];
    } else {
      return cassettes;
    }
  }
});

export const ejectAllCassettes = assign<BWAContext, BWAEvent>({
  cassettes: []
});
