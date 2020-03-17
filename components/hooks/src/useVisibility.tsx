import { useState, useEffect } from "react";
import useIsInViewport from "use-is-in-viewport";

const useVisibility: (args: {
  canLeave?: boolean;
  modBottom?: string;
  modTop?: string;
}) => [boolean, any] = ({
  canLeave = false,
  modBottom = "0px",
  modTop = "0px"
}) => {
  const [trigger, setTrigger] = useState(false);
  const [isInViewport, targetRef] = useIsInViewport({ modBottom, modTop });
  useEffect(() => {
    if (isInViewport) {
      setTrigger(true);
    }
  }, [isInViewport, setTrigger]);
  return [canLeave ? !!isInViewport : trigger, targetRef];
};

export default useVisibility;
