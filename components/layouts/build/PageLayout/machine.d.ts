import { ISiteMetaData } from "@offcourse/interfaces/src/pages";
declare type AppContext = {};
declare type AppEvent = {
    type: "TOGGLE";
} | {
    type: "INITIALIZE";
    siteMetaData: ISiteMetaData;
} | {
    type: "HIDE_CALL_TO_ACTION";
} | {
    type: "SHOW_CALL_TO_ACTION";
};
declare type AppState = {
    value: "idle";
    context: {};
} | {
    value: "default";
    context: {
        siteMetaData: ISiteMetaData & {
            callToActionVisible: boolean;
        };
    };
} | {
    value: "menuOpen";
    context: ISiteMetaData;
};
declare const appStateMachine: import("xstate").StateMachine<AppContext, any, AppEvent, AppState>;
export default appStateMachine;
