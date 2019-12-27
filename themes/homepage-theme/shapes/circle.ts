// @ts-nocheck
import { IShapeProps } from "@offcourse/interfaces/src/canvas";
import { min } from "d3-array";

const circ: (args: IShapeProps) => void = ({
  ctx,
  x,
  y,
  value,
  colors,
  width,
  height
}) => {
  const offset = min([width, height]) / 2;
  const radius = offset / 1.5;
  const length = radius * value;
  ctx.lineWidth = 0;
  ctx.beginPath();
  ctx.arc(x + offset, y + offset, length, 0, 2 * Math.PI, false);
  ctx.fillStyle = colors[1];
  ctx.fill();
};

export default circ;
