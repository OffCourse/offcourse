const scale = [0.4, 0.4, 0.5, 0.5];
const fontSize = scale.map(size => `${size * 5}rem`);
const lineHeight = scale.map(size => `${size * 6}rem`);

export const titleStyles = {
  gridRow: ["1/2"],
  gridColumn: ["1/13"],
  fontFamily: "monospace",
  fontSize,
  lineHeight,
  m: 0
};
