import { createModel } from "@xstate/test";
import TestMachine from "./testMachine";
import { init } from "..";
import * as guards from "./guards";
import * as actions from "./actions";
import { BWAService, BWAContext } from "../types";

describe("feedback app", () => {
  const machine = TestMachine.withConfig({ guards, actions });
  const testModel = createModel<BWAService, BWAContext>(machine).withEvents({
    "xstate.after(500)#(machine).loading": () => {},
    INSERT_CASSETTE: {
      exec: ({ insertCassette }, { cassette }: any) => insertCassette(cassette),
      cases: [{ cassette: "HELLO" }]
    },
    INITIALIZED: {
      exec: ({ initialize }, event: any) => initialize(event),
      cases: [
        { botId: "234", cassettes: [] },
        { botId: "234", cassettes: ["HI"] },
        { botId: "235" },
        { botId: "212", cassettes: ["HI", "AA", "KKK"] },
        { cassettes: ["HI", "AA", "KKK", "KKKK"] }
      ]
    },
    RESET: ({ reset }) => reset()
  });

  const testPlans = testModel.getSimplePathPlans();
  testPlans.forEach(plan => {
    describe(plan.description, () => {
      plan.paths.forEach(path => {
        it(path.description, () => {
          const sut: BWAService = init({});
          return path.test(sut);
        });
      });
    });
  });

  it("coverage", () => {
    testModel.testCoverage();
  });
});
