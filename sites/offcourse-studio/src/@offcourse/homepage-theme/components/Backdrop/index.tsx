/** @jsx jsx */
import { FunctionComponent } from "react";
import { IThemeable } from "@offcourse/interfaces";
import { jsx } from "theme-ui";
import { wrapperStyles } from "./styles";
import useCanvas from "../../../../hooks/useCanvas";
import { drawGrid } from "./helpers";

type BackdropProps = IThemeable & { width?: number; height?: number };

const Backdrop: FunctionComponent<BackdropProps> = ({
  className,
  width = 100,
  height = 100
}) => {
  const ref = useCanvas({ width, height, draw: drawGrid });
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
