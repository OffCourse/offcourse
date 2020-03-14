/** @jsx jsx */
import { FunctionComponent, ReactElement } from "react";
import { jsx, Box } from "theme-ui";
import { controlsWrapper, controlStyles } from "./styles";
import { ControlAnimation } from "./animations";

const Controls: FunctionComponent<{
  children: ReactElement[];
  currentIndex: number;
  colors: { active?: string; passive?: string };
  setIndex: (index: number) => void;
}> = ({ children, colors, currentIndex, setIndex }) => {
  return (
    <Box sx={controlsWrapper}>
      {children.map((_, index) => {
        const isActive = index === currentIndex;
        return (
          <ControlAnimation
            colors={colors}
            sx={controlStyles}
            isActive={isActive}
          >
            <Box
              sx={{ width: "100%", height: "100%" }}
              onClick={() => setIndex(index)}
            ></Box>
          </ControlAnimation>
        );
      })}
    </Box>
  );
};

export default Controls;
