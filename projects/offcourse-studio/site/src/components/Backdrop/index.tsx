/** @jsx jsx */
import { FunctionComponent, useState, useCallback, useRef } from "react";
import { jsx, useThemeUI } from "theme-ui";
import { IThemeable, ICanvasProps } from "@offcourse/interfaces/src";
import { Backdrop as BD } from "@offcourse/atoms";
import { wrapperStyles } from "./styles";
import { useAnimationFrame, useCanvas } from "@offcourse/hooks";
import { circle } from "./shapes";
import { calcGrid, drawGrid } from "./helpers";
import elementsWorker from "./elementsWorker";
// @ts-ignore

type BackdropProps = IThemeable & ICanvasProps & { shapeName: string };

const Backdrop: FunctionComponent<BackdropProps> = ({
  className,
  width = 100,
  height = 100
}) => {
  const { theme }: any = useThemeUI();
  const { primary, grayScale } = theme.colors;
  const colors = [primary, grayScale[0]];

  const [ref, ctx] = useCanvas({ width, height });
  if (!ctx) {
    return ref;
  }

  const [elements, setElements] = useState([]);
  const frameRef = useRef(0);

  const unitSize = 20;
  const numberOfColumns = Math.ceil(width / unitSize);
  const numberOfRows = Math.ceil(height / unitSize);
  const grid = calcGrid({ numberOfColumns, numberOfRows, elements });

  const callback = useCallback(async () => {
    const frame = (frameRef.current = frameRef.current + 1);
    const elems = await elementsWorker.create(frame);
    setElements(elems);
  }, []);

  useAnimationFrame({ callback, delay: 100 });

  drawGrid({ ctx, width, height, grid, colors, shape: circle });

  return (
    <BD
      sx={wrapperStyles}
      ref={ref}
      className={className}
      width={width}
      height={height}
    />
  );
};

export default Backdrop;
