import { useState, useEffect } from "react";
import useIsInViewport from "use-is-in-viewport";

const useVisibility: (args: { canLeave?: boolean }) => [boolean, any] = ({
  canLeave = false
}) => {
  const [trigger, setTrigger] = useState(false);
  const [isInViewport, targetRef] = useIsInViewport({ modBottom: "-400px" });
  useEffect(() => {
    if (isInViewport) {
      setTrigger(true);
    }
  }, [isInViewport, setTrigger]);
  return [canLeave ? !!isInViewport : trigger, targetRef];
};

export default useVisibility;
