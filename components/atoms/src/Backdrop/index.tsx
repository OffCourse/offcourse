/** @jsx jsx */
import { FunctionComponent, forwardRef } from "react";
import { IThemeable } from "@offcourse/interfaces/src";
import { jsx } from "theme-ui";

type BackdropProps = IThemeable & { width?: number; height?: number };

const Backdrop: FunctionComponent<BackdropProps> = (
  { className, width = 100, height = 100 },
  ref
) => {
  return (
    <canvas ref={ref} className={className} width={width} height={height} />
  );
};

export default forwardRef<HTMLCanvasElement, BackdropProps>(Backdrop);
