import { useState, CSSProperties } from "react";
import { useTransition } from "react-spring";
import { useInterval } from "@offcourse/hooks";
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
) => ICarouselItem<T>[] = ({ items, visibleItems, delay = 2000 }) => {
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
  const transitions = useTransition(orderedProjects, item => item.index, {
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

