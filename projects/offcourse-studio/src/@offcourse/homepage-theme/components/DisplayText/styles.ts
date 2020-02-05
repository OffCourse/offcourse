export const wrapperStyles = {
  userSelect: "none",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignContent: "flex-start"
};

const scale = [0.5, 0.6, 0.7, 0.8];
const spacing = scale.map((size) => `${size}rem`);
const fontSize = scale.map((size) => `${size * 5}rem`);
const lineHeight = scale.map((size) => `${size * 6}rem`);
export const spanStyles = {
  userSelect: "none",
  px: 0,
  m: 0,
  mr: spacing,
  "&:last-type": {
    mb: 0,
    mr: 0
  }
};

export const textStyles = {
  fontFamily: "monospace",
  display: "inline-block",
  fontSize,
  lineHeight,
  wordSpacing: "-0.2em",
  mt: 0,
  ml: 0,
  px: spacing,
  mb: spacing,
  color: "grayScale.0",
  bg: "grayScale.4",
  "&:last-type": {
    mb: 0,
    mr: 0
  },
  "@media(max-width: 20rem)": {
    transformOrigin: "top left",
    transform: ["scale(0.95)", "none"]
  }
};
