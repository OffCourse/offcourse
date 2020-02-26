import { IShapeProps } from "@offcourse/interfaces/src";
import { min } from "d3-array";

const circle: (args: IShapeProps) => void = ({
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

const rect: (args: IShapeProps) => void = ({
  ctx,
  x,
  y,
  value,
  colors,
  width,
  height
}) => {
  ctx.lineWidth = 0;
  ctx.fillStyle = colors[value < 0 ? 1 : 0];
  ctx.fillRect(x, y, width, height);
};

export { circle, rect };
