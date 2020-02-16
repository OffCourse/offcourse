import { useRef, useEffect } from "react";
type Callback = (args?: any) => void;

const useInterval: (callback: Callback, delay: number) => void = (
  callback,
  delay
) => {
  const savedCallback = useRef<Callback>();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
    return;
  }, [delay]);
};

export default useInterval;
