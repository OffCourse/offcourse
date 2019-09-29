/** @jsx jsx */
import { FunctionComponent } from "react";
import { IThemeable } from "@offcourse/interfaces";
import { jsx } from "theme-ui";
import { wrapperStyles } from "./styles";
import useCanvas from "@offcourse/homepage-theme/src/hooks/useCanvas";
import useGrid from "@offcourse/homepage-theme/src/hooks/useGrid";
import useBackdrop from "../../../../hooks/useBackdrop";
import { useThemeUI } from "theme-ui";

type BackdropProps = IThemeable & {
  width?: number;
  height?: number;
  backdropName?: string;
};

const Backdrop: FunctionComponent<BackdropProps> = ({
  className,
  width = 100,
  height = 100,
  backdropName = "circGrid"
}) => {
  const { theme }: any = useThemeUI();
  const draw = useBackdrop(backdropName);
  const { grid, unitSize } = useGrid({ width, height });
  const ref = useCanvas({
    width,
    height,
    draw,
    delay: 100,
    theme,
    grid,
    unitSize
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
