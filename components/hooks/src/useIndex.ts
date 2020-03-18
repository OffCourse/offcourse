import { useCallback, useState } from "react";
import useInterval from "./useInterval";

type useIndex = (args?: {
  initialIndex: number;
}) => {
  currentIndex: number;
  nextIndex: () => void;
  setIndex: (index: number) => void;
};

const useIndex: useIndex = args => {
  const [currentIndex, setCurrentIndex] = useState(args?.initialIndex || 0);
  const [intervalDelay, setIntervalDelay] = useState<number | null>(100000);

  const nextIndex = useCallback(() => setCurrentIndex(currentIndex + 1), [
    setCurrentIndex,
    currentIndex
  ]);

  const setIndex = useCallback(
    (index: number) => {
      setIntervalDelay(null);
      setCurrentIndex(index);
    },
    [setIntervalDelay, setCurrentIndex]
  );

  useInterval(nextIndex, intervalDelay);
  return { currentIndex, nextIndex, setIndex };
};

export default useIndex;
