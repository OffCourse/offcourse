/** @jsx jsx */
import { useRef, FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { useThemeUI } from "theme-ui";
import { IThemeable } from "@offcourse/interfaces";
import { wrapperStyles } from "./styles";
import { ICanvasProps } from "@offcourse/interfaces/src/canvas";
import useAnimatedGrid from "@offcourse/homepage-theme/src/hooks/useAnimatedGrid";
import { shuffle } from "d3-array";

type BackdropProps = IThemeable & ICanvasProps & { shapeName: string };

const Backdrop: FunctionComponent<BackdropProps> = ({
  className,
  shapeName,
  width = 100,
  height = 100
}) => {
  const { theme }: any = useThemeUI();
  const { primary, secondary, grayScale } = theme.colors;
  const combos = [
    { shapeName: "circle", colors: [primary, grayScale[4]] },
    { shapeName: "square", colors: [primary, grayScale[0]] },
    { shapeName: "circle", colors: [grayScale[4], grayScale[0]] }
  ];
  const comboRef = useRef(shuffle(combos)[0]);

  const ref = useAnimatedGrid({
    width,
    height,
    ...comboRef.current
  });
  return (
    <canvas
      sx={wrapperStyles}
      ref={ref}
      className={className}
      width={width}
      height={height}
    />
  );
};

export default Backdrop;
