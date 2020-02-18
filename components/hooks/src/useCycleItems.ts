import { useState } from "react";
import useInterval from "./useInterval";
import { IIndexable } from "@offcourse/interfaces/src";

interface ICarouselProps<T extends IIndexable> {
  items: T[];
  delay?: number;
  visibleItems: number;
}

const useCycleItems: <T extends IIndexable>(
  props: ICarouselProps<T>
) => any[] = ({ items, visibleItems, delay = 2000 }) => {
  const [index, setIndex] = useState(0);
  const goUp = (itemIndex: number) => setIndex(itemIndex + 1);
  const goDown = (itemIndex: number) => setIndex(itemIndex - 1);

  const [direction, setDirection] = useState("UP");

  const orderedProjects = [...items].map((item, itemIndex) => ({
    ...item,
    index: itemIndex
  }));
  useInterval(() => {
    let next = null;
    if (direction === "UP") {
      next = goUp;
      const reachedBeginning =
        index >= orderedProjects.length - (visibleItems + 1);
      if (reachedBeginning) {
        setDirection("DOWN");
      }
    } else {
      next = goDown;
      const reachedEnd = index <= 1;
      if (reachedEnd) {
        setDirection("UP");
      }
    }
    next(index);
  }, delay);

  return [index, orderedProjects];
};

export default useCycleItems;
