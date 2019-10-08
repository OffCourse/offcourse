import { IShapeProps } from "@offcourse/interfaces/src/canvas";
import { bin, min } from "d3-array";

const circ: (args: IShapeProps) => void = ({ ctx, x, y, value, colors, width, height }) => {
  const length = min([width, height])
  const offset = length / 2;
  const radius = length / 2.5;
  ctx.lineWidth = 0;
  ctx.beginPath();
  ctx.arc(x + offset, y + offset, Math.abs(value * radius), 0, 2 * Math.PI, false);
  ctx.fillStyle = colors[value < 0 ? 1 : 0];
  ctx.fill();
};

export default circ;
