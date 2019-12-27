import { useState, CSSProperties } from "react";
import { useTransition } from "react-spring";
import useInterval from "./useInterval";
import { IIndexable } from "@offcourse/interfaces/src";

interface ICarouselProps<T extends IIndexable> {
  items: T[];
  delay?: number;
  visibleItems: number;
}

interface ICarouselItem<T extends IIndexable> {
  item: T;
  style: CSSProperties;
  key: string;
}

const useCarousel: <T extends IIndexable>(
  props: ICarouselProps<T>
) => Array<ICarouselItem<T>> = ({ items, visibleItems, delay = 2000 }) => {
  const [index, setIndex] = useState(0);
  const goUp = (i: number) => setIndex(i + 1);
  const goDown = (i: number) => setIndex(i - 1);

  const [direction, setDirection] = useState("UP");

  const orderedProjects = [...items].map((item, i) => ({
    ...item,
    index: i
  }));
  useInterval(() => {
    let next = null;
    if (direction === "UP") {
      next = goUp;
      const reachedEnd = index >= orderedProjects.length - (visibleItems + 1);
      if (reachedEnd) {
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
  const transitions = useTransition(orderedProjects, (item) => item.index, {
    update: [
      { transform: `translate3d(${index * -100}%, 0, 0)` },
      { transform: `translate3d(${index * -100}%, 0, 0)` }
    ]
  });
  return transitions.map(({ item, props, key }) => ({
    item,
    style: props,
    key
  }));
};

export default useCarousel;
