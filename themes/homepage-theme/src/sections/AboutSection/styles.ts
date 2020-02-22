import { SxStyleProp } from "theme-ui";

export const wrapperStyles = {
  bg: ["grayScale.0"],
  py: [8, 8, 8, 8, 8]
};

export const textStyles: SxStyleProp = {
  display: "flex",
  flexDirection: "column",
  gridColumn: ["2/9", "2/12", "2/13", "6/13"],
  justifyContent: ["start", "center"]
};

const scale = [0.35, 0.4, 0.5, 0.5];
const spacing = scale.map(size => `${size}rem`);
const fontSize = scale.map(size => `${size * 5}rem`);
const lineHeight = scale.map(size => `${size * 5}rem`);

export const titleStyles = {
  fontSize,
  lineHeight,
  fontFamily: "monospace",
  wordSpacing: "-0.15em",
  mb: 4
};
