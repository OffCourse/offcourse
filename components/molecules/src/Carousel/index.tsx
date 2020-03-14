/** @jsx jsx */
import { FunctionComponent, ReactElement } from "react";
import { jsx, Box, useThemeUI } from "theme-ui";
import { AnimatePresence } from "framer-motion";
import { outerWrapper, itemsWrapper } from "./styles";
import Controls from "./Controls";
import { ItemAnimation } from "./animations";
import { useIndex, useCycleElements } from "./hooks";

type CarouselProps = { children: ReactElement[] };

const Carousel: FunctionComponent<CarouselProps> = ({ children }) => {
  const { currentIndex, setIndex } = useIndex();
  const { theme, ...x } = useThemeUI();
  console.log(x);
  const active = theme.colors?.primary || "black";
  const passive = theme.colors?.grayScale[2] || "lightGray";
  const { visibleChildren } = useCycleElements({
    currentIndex,
    elements: children
  });

  return (
    <Box sx={outerWrapper}>
      <Box sx={itemsWrapper}>
        <AnimatePresence>
          {visibleChildren.map(child => (
            <ItemAnimation key={child.props.id}>{child}</ItemAnimation>
          ))}
        </AnimatePresence>
      </Box>
      <Controls
        colors={{ active, passive }}
        setIndex={setIndex}
        children={children}
        currentIndex={currentIndex}
      />
    </Box>
  );
};

export default Carousel;
