/** @jsx jsx */
import { FunctionComponent, useState, useCallback, useRef } from "react";
import { jsx, useThemeUI } from "theme-ui";
import { IThemeable, ICanvasProps } from "@offcourse/interfaces/src";
import { Backdrop as BD } from "@offcourse/atoms";
import { wrapperStyles } from "./styles";
import { useAnimationFrame } from "@offcourse/hooks";
import useAnimatedGrid from "./useAnimatedGrid";
import { circle } from "./shapes";
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

  const [elements, setElements] = useState([]);
  const frameRef = useRef(0);

  const callback = useCallback(async () => {
    const frame = (frameRef.current = frameRef.current + 1);
    const elems = await elementsWorker.create(frame);
    setElements(elems);
  }, []);

  useAnimationFrame({ callback, delay: 100 });

  const ref = useAnimatedGrid({
    width,
    elements,
    height,
    shape: circle,
    colors
  });

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
