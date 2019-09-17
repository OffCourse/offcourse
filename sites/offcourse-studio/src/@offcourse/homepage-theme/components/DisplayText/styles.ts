export const wrapperStyles = {
  userSelect: "none",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignContent: "flex-start"
};

const spacing = ["0.4rem", "0.5rem", "0.6rem"];
export const spanStyles = {
  userSelect: "none",
  px: 0,
  m: 0,
  mr: spacing,
  "&:last-type": {
    mb: 0,
    mr: 0
  },
};

export const textStyles = {
  fontFamily: "heading",
  display: "inline-block",
  fontSize: ["2rem", "2.5rem", "3rem"],
  lineHeight: ["2.4rem", "3rem", "3.6rem"],
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
  }
};
