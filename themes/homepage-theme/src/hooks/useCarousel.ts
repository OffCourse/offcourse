import { CSSProperties } from "react";
import { useTransition } from "react-spring";
import { useCycleItems } from "@offcourse/hooks";
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
  const [index, orderedProjects] = useCycleItems({
    items,
    visibleItems,
    delay
  });
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
