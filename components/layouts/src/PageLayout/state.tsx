/** @jsx jsx */
import {
  createContext,
  useEffect,
  useContext,
  useCallback,
  Context,
  FunctionComponent
} from "react";
import { useMachine } from "@xstate/react";
import machine from "./machine";
import { jsx } from "theme-ui";
import { ISiteMetaData } from "@offcourse/interfaces/src/pages";

type AppState = {
  appMode: any;
  toggleMenu: () => void;
  showCTA: () => void;
  hideCTA: () => void;
  siteMetaData?: ISiteMetaData;
};

export const StateContext: Context<AppState> = createContext({
  appMode: "default",
  toggleMenu: () => {
    return;
  },
  showCTA: () => {
    return;
  },
  hideCTA: () => {
    return;
  }
});

export const StateProvider: FunctionComponent<{
  siteMetaData: ISiteMetaData;
}> = ({ children, siteMetaData }) => {
  const [current, send] = useMachine(machine);
  useEffect(() => {
    send({ type: "INITIALIZE", siteMetaData });
  }, [send, siteMetaData]);
  const toggleMenu = useCallback(() => send("TOGGLE"), [send]);
  const showCTA = useCallback(() => send("SHOW_CALL_TO_ACTION"), [send]);
  const hideCTA = useCallback(() => send("HIDE_CALL_TO_ACTION"), [send]);

  return (
    <StateContext.Provider
      value={{
        appMode: current.value,
        toggleMenu,
        showCTA,
        hideCTA,
        ...current.context
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
