import { useState } from "react";
import { useTransition } from "react-spring";
import useInterval from "./useInterval";

interface ICarouselProps {
  items: any[];
  delay: number;
};

interface ICarouselItem {
  item: any[];
  style: any;
  key: string;
};

const useCarousel: (props: ICarouselProps) => ICarouselItem[] = ({
  items,
  delay = 2000,
}) => {
  const [index, setIndex] = useState(0);
  const goUp = (i: number) => setIndex(i + 1);
  const goDown = (i: number) => setIndex(i - 1);

  const [direction, setDirection] = useState("UP");

  const orderedProjects = [...items, ...items].map((item, i) => ({
    ...item,
    index: i
  }));
  useInterval(() => {
    let next = null;
    if (direction === "UP") {
      next = goUp;
      const reachedEnd = index >= orderedProjects.length - 4;
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
      { transform: `translate3d(${index * -100}%, 0, 0)`, opacity: 0.4 },
      { transform: `translate3d(${index * -100}%, 0, 0)`, opacity: 1 }
    ]
  });
  return transitions.map(({ item, props, key }) =>
    ({ item, style: props, key })
  );
};

export default useCarousel;
