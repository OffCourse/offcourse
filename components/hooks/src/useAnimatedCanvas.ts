import { useCallback, useRef } from "react";
import useCanvas from "./useCanvas";
import useAnimationFrame from "./useAnimationFrame";
import { AnimatedCanvasProps } from "@offcourse/interfaces/src";

const useAnimatedCanvas: (args: AnimatedCanvasProps) => void = ({
  width,
  height,
  draw,
  callback
}) => {
  const frameRef = useRef<number>(0);
  const cb = useCallback(() => {
    const frame = (frameRef.current = frameRef.current + 1);
    callback(frame);
  }, [frameRef, callback]);
  useAnimationFrame({ callback: cb, delay: 100 });
  return useCanvas({ width, height, draw });
};

export default useAnimatedCanvas;

