/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { useThemeUI } from "theme-ui";
import { IThemeable } from "@offcourse/interfaces";
import { wrapperStyles } from "./styles";
import { ICanvasProps } from "@offcourse/interfaces/src/canvas";
import useAnimatedGrid from "@offcourse/homepage-theme/src/hooks/useAnimatedGrid";
import useGetShapes from "@offcourse/homepage-theme/src/hooks/useGetShapes";
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
  const shapes = useGetShapes();
  const palettes = [
    [primary, secondary],
    [primary, grayScale[4]],
    [primary, grayScale[0]]
  ];
  const randomShape = shuffle(shapes)[0];
  const colors = shuffle(palettes)[0];

  const ref = useAnimatedGrid({
    shapeName: shapeName || randomShape,
    width,
    height,
    colors
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
