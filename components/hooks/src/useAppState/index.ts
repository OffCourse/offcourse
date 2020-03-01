import { useCallback } from "react";
import { useMachine } from "@xstate/react";
import machine from "./machine";

const useAppState: () => {
  appMode: any;
  toggleMenu: () => void;
} = () => {
  const [current, send] = useMachine(machine);
  const toggleMode = useCallback(() => send("TOGGLE"), [send]);
  return {
    appMode: current.value,
    toggleMenu: toggleMode
  };
};

export default useAppState;
