import { useCallback } from "react";
import { useMachine } from "@xstate/react";
import machine from "./machine";
import { ISiteMetaData } from "@offcourse/interfaces/src/pages";

const useAppState: (args: {
  siteMetaData: ISiteMetaData;
  path: string;
}) => {
  appMode: any;
  siteMetaData: ISiteMetaData;
  toggleMenu: () => void;
} = ({ siteMetaData, path }) => {
  const { links: allLinks } = siteMetaData;
  const links = allLinks.filter(({ href }) => href !== path);
  const [current, send] = useMachine(machine);
  const toggleMode = useCallback(() => send("TOGGLE"), [send]);
  return {
    appMode: current.value,
    siteMetaData: { ...siteMetaData, links },
    toggleMenu: toggleMode
  };
};

export default useAppState;
