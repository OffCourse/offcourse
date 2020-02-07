import {  SxStyleProp } from "theme-ui";

const wrapperStyles: SxStyleProp = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignContent: "flex-end",
  textAlign: "right",
  userSelect: "none"
};

const scale = [0.4, 0.4, 0.5, 0.5];
const spacing = scale.map((size) => `${size}rem`);
const fontSize = scale.map((size) => `${size * 5}rem`);
const lineHeight = scale.map((size) => `${size * 6}rem`);

const spanStyles: SxStyleProp = {
  userSelect: "none",
  px: 0,
  m: 0,
  mb: spacing,
  "&:last-of-type": {
    mb: 0
  }
};

const textStyles = {
  fontFamily: "monospace",
  display: "inline-block",
  fontSize,
  lineHeight,
  wordSpacing: "-0.2em",
  m: 0,
  px: spacing,
  mb: 0,
  color: "grayScale.0",
  bg: "grayScale.4",
  "&:last-type": {
    mb: 0,
    mr: 0
  }
};

export { wrapperStyles, spanStyles, textStyles };
