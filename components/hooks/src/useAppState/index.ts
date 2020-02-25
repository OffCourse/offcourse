import { useCallback } from "react";
import { useMachine } from "@xstate/react";
import machine from "./machine";
import { ISiteMetaData } from "@offcourse/interfaces/src/pages";

const useAppState: (args: {
  siteMetaData: ISiteMetaData;
  path: string;
}) => [any, ISiteMetaData, () => void] = ({ siteMetaData, path }) => {
  const { links: allLinks } = siteMetaData;
  const links = allLinks.filter(({ href }) => href !== path);
  const [current, send] = useMachine(machine);
  const toggleMode = useCallback(() => send("TOGGLE"), [send]);
  return [current, { ...siteMetaData, links }, toggleMode];
};

export default useAppState;
