import { createModel } from "@xstate/test";
import TestMachine from "../machine";
import { init } from "..";
import * as guards from "../machine/guards";
import * as actions from "../machine/actions";
import * as services from "./services";
import { BWAService, BWAContext, BWAEventType } from "../types";

const { INITIALIZED, RESET, FETCHED_STATS } = BWAEventType;

const config = { guards, actions, services };

describe("feedback app", () => {
  const machine = TestMachine.withConfig({ guards, actions, services });

  const testModel = createModel<BWAService, BWAContext>(machine).withEvents({
    INITIALIZED: {
      exec: ({ send }, { payload }: any) => {
        send({
          type: INITIALIZED,
          payload
        });
      },
      cases: [
        { payload: { botName: "234", cassettes: [] } },
        { payload: { botName: "234", cassettes: ["HI"] } },
        { payload: { botName: "235" } },
        { payload: { botName: "212", cassettes: ["HI", "AA", "KKK"] } },
        { payload: { cassettes: ["HI", "AA", "KKK", "KKKK"] } }
      ]
    },
    FETCHED_STATS: {
      exec: ({ send }, { payload }: any) => {
        send({ type: FETCHED_STATS, payload });
      },
      cases: [{ payload: {} }, { payload: { stats: { health: 50 } } }]
    },
    RESET: {
      exec: ({ send }) => {
        send({ type: RESET });
      }
    }
  });

  const testPlans = testModel.getShortestPathPlans();
  testPlans.forEach(plan => {
    describe(plan.description, () => {
      plan.paths.forEach(path => {
        it(path.description, () => {
          const sut: BWAService = init(config);
          return path.test(sut);
        });
      });
    });
  });

  it("coverage", () => {
    testModel.testCoverage();
  });
});
