import { IShapeProps } from "@offcourse/interfaces/src/canvas";

const circ: (args: IShapeProps) => void = ({ ctx, x, y, value, colors, width }) => {
  const radius = width / 2;
  ctx.lineWidth = 0;
  ctx.beginPath();
  ctx.arc(x, y, value * radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = colors[value < 0.5 ? 1 : 0];
  ctx.fill();
};

export default circ;
