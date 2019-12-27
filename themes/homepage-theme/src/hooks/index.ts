import { useRef, useEffect, useState } from "react";
import ResizeObserver from "resize-observer-polyfill";
import { IMeasurable } from "@offcourse/interfaces/src";

const useMeasure: () => [IMeasurable, { ref: any }] = () => {
  const ref: any = useRef();
  const [bounds, set] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    clientWidth: 0,
    clientHeight: 0
  });
  const [ro] = useState(
    () =>
      new ResizeObserver(([entry]) => {
        const { width, height, top, left } = entry.contentRect;
        const { clientWidth, clientHeight } = entry.target;
        set({ width, left, height, top, clientWidth, clientHeight });
      })
  );
  useEffect(() => {
    if (ref.current) {
      ro.observe(ref.current);
    }
    return () => ro.disconnect();
  }, []);
  return [bounds, { ref }];
};

const useShowTab: () => [boolean, (args: any) => void] = () => {
  const [isVisible, setVisibility] = useState(true);

  const handlePositionChange: (args: { currentPosition: string }) => void = ({
    currentPosition
  }) => {
    setVisibility(currentPosition !== "inside" ? true : false);
  };

  return [isVisible, handlePositionChange];
};

export { useShowTab, useMeasure };
