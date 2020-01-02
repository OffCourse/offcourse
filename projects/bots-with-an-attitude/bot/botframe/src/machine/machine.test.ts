import { createModel } from "@xstate/test";
import BWAMachine from "../machine";
import { init } from "..";
import { BWAService, BWAContext } from "../types";
import * as actions from "./actions";
import * as guards from "./guards";

describe("feedback app", () => {
  const machine = BWAMachine.withConfig({ actions, guards });
  const testModel = createModel<BWAService, BWAContext>(machine).withEvents({
    INSERT_CASSETTE: {
      exec: async ({ insertCassette }) => insertCassette(),
      cases: [{ cassette: "HII" }]
    },
    RESET: async ({ reset }) => reset
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
