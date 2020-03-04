/** @jsx jsx */
import {
  createContext,
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
  siteMetaData: ISiteMetaData;
};
const initialSiteMetaData: ISiteMetaData = {
  links: [],
  callToAction: null,
  siteName: "",
  contactInfo: {}
};

export const StateContext: Context<AppState> = createContext({
  appMode: "default",
  toggleMenu: () => {
    return;
  },
  siteMetaData: initialSiteMetaData
});

export const StateProvider: FunctionComponent<{
  siteMetaData: ISiteMetaData;
}> = ({ children, siteMetaData }) => {
  const [current, send] = useMachine(machine);
  const toggleMenu = useCallback(() => send("TOGGLE"), [send]);
  const links = siteMetaData.links.filter(({ title }) => title !== "home");

  return (
    <StateContext.Provider
      value={{
        appMode: current.value,
        toggleMenu,
        siteMetaData: { ...siteMetaData, links }
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
