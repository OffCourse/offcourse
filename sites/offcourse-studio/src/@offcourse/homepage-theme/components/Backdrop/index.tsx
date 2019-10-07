/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { IThemeable } from "@offcourse/interfaces";
import { wrapperStyles } from "./styles";
import { ICanvasProps } from "@offcourse/interfaces/src/canvas";
import useAnimatedGrid from "@offcourse/homepage-theme/src/hooks/useAnimatedGrid";
import { useAppState } from "../../../../contexts/StateContext";

type BackdropProps = IThemeable & ICanvasProps & { shapeName: string };

const Backdrop: FunctionComponent<BackdropProps> = ({
  className,
  width = 100,
  height = 100
}) => {
  const { background } = useAppState();
  const ref = useAnimatedGrid({
    width,
    height,
    ...background
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
