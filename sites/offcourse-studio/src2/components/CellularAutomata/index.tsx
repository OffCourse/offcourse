import React, { FunctionComponent, useRef, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { IStylable, IMeasurable } from "../../interfaces";
import { drawRects } from "./helpers";

type CellularAutomataProps = Pick<
  IStylable,
  "className" | "primaryColor" | "secondaryColor"
> &
  Pick<IMeasurable, "width" | "height">;

const CellularAutomata: FunctionComponent<CellularAutomataProps> = ({
  className,
  width,
  height,
  primaryColor = "white",
  secondaryColor = "black"
}) => {
  const ref: any = useRef();
  const canvas = ref.current;
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (canvas) {
      const options: any = {
        ctx: canvas.getContext("2d"),
        numberOfColumns: 10,
        primaryColor,
        secondaryColor
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
