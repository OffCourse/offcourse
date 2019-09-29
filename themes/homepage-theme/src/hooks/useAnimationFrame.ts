import { useEffect, useRef } from "react";

const useAnimationFrame = ({ callback, delay = 0 }) => {
  const requestRef = useRef();
  const previousTimeRef = useRef();
  const animate: (time: number) => void = time => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current;
      if (deltaTime > delay) {
        callback(deltaTime)
        previousTimeRef.current = time;
      }
    } else {
      previousTimeRef.current = time;
    }
    requestRef.current = requestAnimationFrame(animate);
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [callback]);
}

export default useAnimationFrame;
