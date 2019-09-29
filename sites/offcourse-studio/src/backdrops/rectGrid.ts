import drawGrid from "./helpers/drawGrid";

const rect = ({ ctx, x, y, value, primaryColor, secondaryColor, width, height }) => {
  ctx.lineWidth = 0;
  ctx.fillStyle = value < 0 ? primaryColor : secondaryColor;
  ctx.fillRect(x, y, width, height);
};

const rectGrid = ({ ctx, unitSize, grid, theme, frame }) => {
  const { primary, grayScale } = theme.colors;
  drawGrid({ ctx, primaryColor: primary, secondaryColor: grayScale[0], shape: rect, frame, unitSize, grid })
};

export default rectGrid;
