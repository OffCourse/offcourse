import { createModel } from "@xstate/test";
import TestMachine from "../machine";
import { init } from "..";
import * as guards from "../machine/guards";
import * as actions from "../machine/actions";
import * as services from "./services";
import { BWAService, BWAContext, BWAEventType } from "../types";

const config = { guards, actions, services };

describe("feedback app", () => {
  const machine = TestMachine.withConfig({ guards, actions, services });

  const testModel = createModel<BWAService, BWAContext>(machine).withEvents({
    INSERT_CASSETTE: {
      exec: ({ send }, { cassette }: any) => {
        send({ type: BWAEventType.INSERT_CASSETTE, cassette });
      },
      cases: [{ cassette: "HELLO" }]
    },
    INITIALIZED: {
      exec: ({ send }, { botName, cassettes }: any) => {
        send({ type: BWAEventType.INITIALIZED, botName, cassettes });
      },
      cases: [
        { botName: "234", cassettes: [] },
        { botName: "234", cassettes: ["HI"] },
        { botName: "235" },
        { botName: "212", cassettes: ["HI", "AA", "KKK"] },
        { cassettes: ["HI", "AA", "KKK", "KKKK"] }
      ]
    },
    FETCHED_STATS: {
      exec: ({ send }, { stats }: any) => {
        send({ type: BWAEventType.FETCHED_STATS, stats });
      },
      cases: [{}, { stats: { health: 50 } }]
    },
    RESET: {
      exec: ({ send }) => {
        send({ type: BWAEventType.RESET });
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
