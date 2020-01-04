import { createModel } from "@xstate/test";
import TestMachine from "./testMachine";
import { init } from "..";
import * as guards from "./guards";
import * as actions from "./actions";
import { BWAService, BWAContext } from "../types";

describe("feedback app", () => {
  const machine = TestMachine.withConfig({ guards, actions });
  const testModel = createModel<BWAService, BWAContext>(machine).withEvents({
    INSERT_CASSETTE: {
      exec: ({ insertCassette }, { cassette }: any) => insertCassette(cassette),
      cases: [{ cassette: "HELLO" }]
    },
    INITIALIZED: {
      exec: ({ initialize }, _e: any) => initialize(),
      cases: [
        { cassettes: [] },
        { cassettes: ["HI"] },
        { cassettes: ["HI", "AA"] },
        { cassettes: ["HI", "AA", "KKK"] },
        { cassettes: ["HI", "AA", "KKK", "KKKK"] }
      ]
    },
    RESET: ({ reset }) => reset()
  });

  const testPlans = testModel.getShortestPathPlans();
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
