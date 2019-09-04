export const wrapperStyles = {
  userSelect: "none",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignContent: "flex-start"
};

export const spanStyles = {
  userSelect: "none",
  px: 0,
  m: 0,
  mr: ["0.4rem", "0.5rem", "0.6rem"],
  "&:last-type": {
    mb: 0,
    mr: 0
  },
};

export const textStyles = {
  fontFamily: "heading",
  display: "inline-block",
  m: 0,
  fontSize: ["2rem", "2.5rem", "3rem"],
  lineHeight: ["2.4rem", "3rem", "3.6rem"],
};
