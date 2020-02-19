/** @jsx jsx */
import { ReactElement } from "react";
import { jsx } from "theme-ui";
import { animated } from "react-spring";
import { useCarousel } from "../../hooks";
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
  if (items.length <= visibleItems) {
    return (
      <div sx={wrapperStyles} className={className}>
        {items.map((item, index) => (
          <div sx={itemStyles} key={index}>
            {children(item)}
          </div>
        ))}
      </div>
    );
  }

  const transitions = useCarousel({ items, delay, visibleItems });

  return (
    <div sx={wrapperStyles} className={className}>
      {transitions.map(({ item, style, key }) => (
        <animated.div sx={itemStyles} style={style} key={key}>
          {children(item)}
        </animated.div>
      ))}
    </div>
  );
};

export default Carousel;
