/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, useThemeUI } from "theme-ui";
import { IThemeable, ICanvasProps, Shape } from "@offcourse/interfaces/src";
import { wrapperStyles } from "./styles";
import { Backdrop as BD } from "@offcourse/atoms";
import { circle } from "./shapes";
import gridWorker from "./GridWorker";
import { useAnimatedGridCanvas } from "@offcourse/hooks";

type BackdropProps = IThemeable &
  ICanvasProps & { unitSize: number; shape: Shape };

const Backdrop: FunctionComponent<BackdropProps> = ({
  className,
  width = 100,
  height = 100,
  shape = circle,
  unitSize = 20
}) => {
  const { theme }: any = useThemeUI();
  const { primary, grayScale } = theme.colors;

  const generateGrid = async (frame: number) => {
    const elements = await gridWorker.generateElements(frame);
    const grid = await gridWorker.generateGrid({
      elements,
      unitSize,
      width,
      height
    });
    return grid;
  };

  const canvasRef = useAnimatedGridCanvas({
    width,
    generateGrid,
    height,
    colors: [primary, grayScale[0]],
    shape
  });
  return <BD sx={wrapperStyles} ref={canvasRef} className={className} />;
};

export default Backdrop;
