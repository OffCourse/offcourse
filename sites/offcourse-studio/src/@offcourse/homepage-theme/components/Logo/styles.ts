export const wrapperStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignContent: "flex-end",
  textAlign: "right",
  userSelect: "none"
};

const spacing = ["0.4rem", "0.5rem", "0.6rem"];

export const spanStyles = {
  userSelect: "none",
  px: 0,
  m: 0,
  mb: spacing,
  "&:last-of-type": {
    mb: 0,
  },
};
export const textStyles = {
  fontFamily: "monospace",
  display: "inline-block",
  fontSize: ["2rem", "2.5rem", "3rem"],
  lineHeight: ["2.4rem", "3rem", "3.6rem"],
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
