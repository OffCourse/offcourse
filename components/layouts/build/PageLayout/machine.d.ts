import { AppEvent, AppContext, AppState } from "@offcourse/interfaces/src";
declare const appStateMachine: import("xstate").StateMachine<AppContext, any, AppEvent, AppState>;
export default appStateMachine;
