import { ISiteMetaData } from "@offcourse/interfaces/src/pages";

type Sections = Record<string, boolean>;

export type AppContext = {
  sections?: Sections;
  siteMetaData?: ISiteMetaData;
};

export type AppEvent =
  | { type: "TOGGLE" }
  | { type: "INITIALIZE"; payload: { siteMetaData: ISiteMetaData } }
  | { type: "HIDE_CALL_TO_ACTION" }
  | { type: "SHOW_CALL_TO_ACTION" }
  | { type: "UPDATE_SECTIONS"; payload: { role: string; isVisible: boolean } };

export type AppState =
  | { value: "idle"; context: {} }
  | {
      value: "default";
      context: {
        siteMetaData: ISiteMetaData & {
          callToActionVisible: boolean;
        };
      };
    }
  | { value: "menuOpen"; context: { siteMetaData: ISiteMetaData } };
