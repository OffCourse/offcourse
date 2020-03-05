import { createMachine, assign } from "xstate";
import { ISiteMetaData } from "@offcourse/interfaces/src/pages";

type AppContext = {};

type AppEvent =
  | { type: "TOGGLE" }
  | { type: "INITIALIZE"; siteMetaData: ISiteMetaData }
  | { type: "HIDE_CALL_TO_ACTION" }
  | { type: "SHOW_CALL_TO_ACTION" };

type AppState =
  | { value: "idle"; context: {} }
  | {
      value: "default";
      context: {
        siteMetaData: ISiteMetaData & { callToActionVisible: boolean };
      };
    }
  | { value: "menuOpen"; context: ISiteMetaData };

const addSiteMetaData = assign<any, any>({
  siteMetaData: (_: any, { siteMetaData }: { siteMetaData: ISiteMetaData }) => {
    const links = siteMetaData.links.filter(({ title }) => title !== "home");
    return { ...siteMetaData, links };
  }
});

const appStateMachine = createMachine<AppContext, AppEvent, AppState>(
  {
    id: "appState",
    initial: "idle",
    states: {
      idle: {
        on: {
          INITIALIZE: {
            target: "default",
            actions: ["addSiteMetaData"]
          }
        }
      },
      default: {
        on: {
          TOGGLE: "menuOpen",
          SHOW_CALL_TO_ACTION: {
            actions: [
              assign({
                siteMetaData: ({ siteMetaData }: any, _) => {
                  return {
                    ...siteMetaData,
                    callToActionVisible: true
                  };
                }
              })
            ]
          },
          HIDE_CALL_TO_ACTION: {
            actions: [
              assign({
                siteMetaData: ({ siteMetaData }: any, _) => {
                  return {
                    ...siteMetaData,
                    callToActionVisible: false
                  };
                }
              })
            ]
          }
        }
      },
      menuOpen: {
        on: { TOGGLE: "default" }
      }
    }
  },
  {
    actions: {
      addSiteMetaData
    }
  }
);

export default appStateMachine;
