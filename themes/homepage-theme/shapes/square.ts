import { IShapeProps } from "@offcourse/interfaces/src/canvas";

const rect: (args: IShapeProps) => void = ({ ctx, x, y, value, colors, width, height }) => {
  ctx.lineWidth = 0;
  ctx.fillStyle = colors[value < 0 ? 1 : 0];
  ctx.fillRect(x, y, width, height);
};

export default rect;
