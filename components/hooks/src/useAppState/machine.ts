import { Machine } from "xstate";

const toggleMachine = Machine({
  id: "toggle",
  initial: "default",
  states: {
    default: {
      on: { TOGGLE: "menuOpen" }
    },
    menuOpen: {
      on: { TOGGLE: "default" }
    }
  }
});

export default toggleMachine;
