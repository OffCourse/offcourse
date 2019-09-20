/** @jsx jsx */
import { ReactElement, FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { animated } from "react-spring";
import useCarousel from "../../hooks/useCarousel";
import { IThemeable } from "@offcourse/interfaces";
import { itemStyles, wrapperStyles } from "./styles";

type CarouselProps = {
  items: any[];
  children: (item: { index: number }) => ReactElement;
  delay?: number;
  visibleItems: number;
} & IThemeable;

const Carousel: FunctionComponent<CarouselProps> = ({
  className,
  children,
  items,
  visibleItems,
  delay
}) => {
  if (items.length <= visibleItems) {
    return (
      <div sx={wrapperStyles} className={className}>
        {items.map((item, index) => (
          <div sx={itemStyles} key={index}>
            {children(item as { index: number })}
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
          {children(item as { index: number })}
        </animated.div>
      ))}
    </div>
  );
};

export default Carousel;
