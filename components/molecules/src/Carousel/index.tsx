/** @jsx jsx */
import { FunctionComponent, ReactElement, useCallback, useState } from "react";
import { jsx, Box } from "theme-ui";
import { wrap } from "@popmotion/popcorn";
import { motion, AnimatePresence } from "framer-motion";
import { useInterval } from "@offcourse/hooks";

const Carousel: FunctionComponent<{ children: ReactElement[] }> = ({
  children
}) => {
  const [currentIndex, setIndex] = useState(0);
  const [intervalDelay, setIntervalDelay] = useState<number | null>(500);
  const numberOfItems = children.length;

  const moveToNext = useCallback(() => {
    setIndex(c => wrap(0, numberOfItems, c + 1));
  }, [numberOfItems, setIndex]);

  useInterval(moveToNext, intervalDelay);

  const prevItem = children[wrap(0, numberOfItems, currentIndex - 1)];
  const currentItem = children[currentIndex];
  const nextItem = children[wrap(0, numberOfItems, currentIndex + 1)];

  const visibleChildren = [prevItem, currentItem, nextItem];

  return (
    <Box
      sx={{
        width: "100rem",
        overflowX: "hidden"
      }}
    >
      <Box
        sx={{
          flexDirection: "row",
          display: "flex"
        }}
      >
        <AnimatePresence>
          {visibleChildren.map((child: ReactElement) => {
            const { id } = child.props;
            return (
              <motion.div
                key={id}
                positionTransition={{ damping: 500 }}
                exit={{ opacity: 1 }}
              >
                {child}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </Box>
      <Box
        sx={{
          flexDirection: "row",
          display: "flex"
        }}
      >
        {children.map((_, index) => (
          <h1
            onClick={() => {
              setIntervalDelay(null);
              setIndex(index);
            }}
          >
            {index === currentIndex ? "X" : "O"}
          </h1>
        ))}
      </Box>
    </Box>
  );
};

export default Carousel;
