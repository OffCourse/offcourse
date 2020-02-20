/** @jsx jsx */
import { ReactElement } from "react";
import { jsx, Box } from "theme-ui";
import { animated, useTransition } from "react-spring";
import { useCycleItems } from "@offcourse/hooks";
import { IThemeable, IIndexable } from "@offcourse/interfaces/src";
import { itemStyles, wrapperStyles } from "./styles";

type CarouselProps<T extends IIndexable> = {
  items: T[];
  delay?: number;
  visibleItems: number;
  children: (args: T) => ReactElement<T>;
} & IThemeable;

const Carousel = <T extends IIndexable>({
  className,
  children,
  items,
  visibleItems,
  delay
}: CarouselProps<T>) => {
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

  if (items.length <= visibleItems) {
    return (
      <Box sx={wrapperStyles} className={className}>
        {items.map((item, itemIndex) => (
          <Box sx={itemStyles} key={itemIndex}>
            {children(item)}
          </Box>
        ))}
      </Box>
    );
  }

  return (
    <Box sx={wrapperStyles} className={className}>
      {transitions.map(({ item, props, key }) => (
        <Box as={animated.div} sx={itemStyles} style={props} key={key}>
          {children(item)}
        </Box>
      ))}
    </Box>
  );
};

export default Carousel;
