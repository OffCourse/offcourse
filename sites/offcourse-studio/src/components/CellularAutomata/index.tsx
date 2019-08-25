import React, { FunctionComponent, useRef, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { IStylable, IMeasurable } from "../../interfaces";
import { drawRects } from "./helpers";

type CellularAutomataProps = IStylable &
  IMeasurable & { foreground?: string; background?: string };

const CellularAutomata: FunctionComponent<CellularAutomataProps> = ({
  className,
  width,
  height,
  foreground = "white",
  background = "black"
}) => {
  const ref: any = useRef();
  const canvas = ref.current;
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (canvas) {
      const options = {
        ctx: canvas.getContext("2d"),
        numberOfColumns: 10,
        foreground,
        background
      };
      drawRects(options);
      setInterval(() => {
        drawRects(options);
      }, 2000);
    } else {
      setCounter(counter + 1);
    }
  }, [canvas, width, height]);
  return (
    <canvas ref={ref} className={className} width={width} height={height} />
  );
};

export default styled(CellularAutomata)`
  position: absolute;
`;
