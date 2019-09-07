import { useRef, useEffect, useState } from "react";
import ResizeObserver from "resize-observer-polyfill";
import { IMeasurable } from "@offcourse/interfaces";

const useMeasure: () => [IMeasurable, { ref: any }] = () => {
  const ref: any = useRef();
  const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const [ro] = useState(
    () => new ResizeObserver(([entry]) => set(entry.contentRect))
  );
  useEffect(() => {
    if (ref.current) { ro.observe(ref.current); }
    return () => ro.disconnect();
  }, []);
  return [bounds, { ref }];
};

const useShowTab: () => [boolean, (args: any) => void] = () => {
  const [isVisible, setVisibility] = useState(true);

  const handlePositionChange: (args: { currentPosition: string }) => void = ({
    currentPosition,
  }) => {
    setVisibility(currentPosition !== "inside" ? true : false);
  };

  return [isVisible, handlePositionChange];
};

export { useShowTab, useMeasure };
