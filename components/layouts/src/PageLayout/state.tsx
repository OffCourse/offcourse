/** @jsx jsx */
import {
  createContext,
  useContext,
  Context,
  FunctionComponent
} from "react";
import { useMachine } from "@xstate/react";
import machine from "./machine";
import { jsx } from "theme-ui";
import { AppContext, AppEvent } from "@offcourse/interfaces/src";
import { ISiteMetaData } from "@offcourse/interfaces/src/pages";
import * as actions from "./actions";

type AppState = {
  appMode: string;
  current: any;
  callToActionVisible?: boolean;
  send: (event: any) => void;
  registerSection: (event: any) => void;
  siteMetaData?: ISiteMetaData;
};

export const StateContext: Context<AppState> = createContext({
  current: "default",
  appMode: "default",
  registerSection: _event => {
    return;
  },

  send: _event => {
    return;
  }
});

export const StateProvider: FunctionComponent<{
  siteMetaData: ISiteMetaData;
}> = ({ children, siteMetaData }) => {
  const [current, send] = useMachine<AppContext, AppEvent>(machine, {
    devTools: true,
    actions,
    context: { siteMetaData }
  });
  const appMode = current.toStrings()[0];

  const callToActionVisible = current.context.sections
    ? !current.context.sections["ContactSection"]
    : true;

  const registerSection = ({ role, isVisible }: any) => {
    send({ type: "UPDATE_SECTIONS", payload: { role, isVisible } });
  };

  return (
    <StateContext.Provider
      value={{
        appMode,
        current,
        send,
        registerSection,
        callToActionVisible,
        ...current.context
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
