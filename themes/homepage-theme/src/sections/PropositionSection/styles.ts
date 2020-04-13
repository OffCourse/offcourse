import { SxStyleProp } from "theme-ui";

export const wrapperStyles: (isInversed: boolean) => SxStyleProp = (
  isInversed: boolean
) => ({
  alignContent: ["center"],
  px: [6, 6, 8, 8],
  bg: isInversed ? "black" : "white",
});

export const textStyles: (isInversed: boolean) => SxStyleProp = (
  isInversed
) => ({
  display: "grid",
  color: isInversed ? "white" : "black",
  order: [1, 1, 1, isInversed ? 0 : 1],
  gridColumn: ["1/10", "1/13", "1/13", "span 5"],
  alignContent: ["center"],
});

const scale = [0.5, 0.6, 0.7, 0.75];
const spacing = scale.map((size) => `${size}rem`);
const fontSize = scale.map((size) => `${size * 5}rem`);
const lineHeight = scale.map((size) => `${size * 5}rem`);
export const titleStyles: (isInversed: boolean) => SxStyleProp = (
  isInversed
) => ({
  display: "grid",
  gridColumn: ["1/10", "1/13", "1/13", "span 7"],
  alignContent: ["center"],
  mb: [4, 4, 4, 0],
  span: {
    mr: [4, 4, 4, 0],
    "&:last-child": {
      h1: {
        mb: 0,
      },
    },
  },
  "> *": {
    justifyContent: [
      "flex-start",
      "flex-start",
      "flex-start",
      isInversed ? "flex-end" : "flex-start",
    ],
  },
  h1: {
    color: isInversed ? "black" : "white",
    bg: isInversed ? "white" : "black",
    fontSize,
    lineHeight,
    fontFamily: "monospace",
    wordSpacing: "-0.15em",
  },
});
