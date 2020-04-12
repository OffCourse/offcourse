import { SxStyleProp } from "theme-ui";

export const wrapperStyles: SxStyleProp = {
  alignContent: ["center"],
  gridColumnGap: [0, 0, 0, 8],
  px: [4, 4, 8, 8],
};

export const projectStyles: SxStyleProp = {
  display: "grid",
  gridColumn: ["1/10", "1/13", "1/13", "span 6"],
};

export const textStyles: SxStyleProp = {
  display: "grid",
  p: 6,
  gridColumn: ["1/10", "1/13", "1/13", "span 6"],
  alignContent: ["center"],
};

const scale = [0.35, 0.4, 0.5, 0.5];
const spacing = scale.map((size) => `${size}rem`);
const fontSize = scale.map((size) => `${size * 5}rem`);
const lineHeight = scale.map((size) => `${size * 5}rem`);

export const titleStyles = {
  fontSize,
  lineHeight,
  fontFamily: "monospace",
  wordSpacing: "-0.15em",
  mb: 4,
};
