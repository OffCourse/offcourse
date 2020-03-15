import { useCallback, useState, ReactElement } from "react";
import { wrap } from "@popmotion/popcorn";
import { useInterval } from "@offcourse/hooks";

const useIndex: () => any = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalDelay, setIntervalDelay] = useState<number | null>(100000);

  const nextIndex = useCallback(
    (index: number, incrementBy = 1) => setCurrentIndex(index + incrementBy),
    [setCurrentIndex]
  );

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

const useCycleElements: (x: {
  elements: ReactElement[];
  currentIndex: number;
  numberOfElements: number;
}) => { visibleChildren: ReactElement[] } = ({
  elements,
  currentIndex,
  numberOfElements = 1
}) => {
  const numberOfItems = elements.length;
  const prevItem = elements[wrap(0, numberOfItems, currentIndex - 1)];
  const currentItem = elements[wrap(0, numberOfItems, currentIndex)];
  const nextItem = elements[wrap(0, numberOfItems, currentIndex + 1)];
  const visibleChildren = {
    1: [currentItem],
    2: [currentItem, nextItem],
    3: [prevItem, currentItem, nextItem]
  };

  return { visibleChildren: visibleChildren[numberOfElements] };
};

export { useIndex, useCycleElements };
