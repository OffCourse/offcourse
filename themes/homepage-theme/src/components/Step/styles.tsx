export const numberStyles = {
  borderBottom: "0.25rem solid black",
  fontFamily: "monospace",
  fontSize: ["3.5rem", "5rem"],
  lineHeight: ["4rem", "5.5rem"],
  mb: 3
};

export const titleStyles = {
  display: "grid",
  fontFamily: "monospace",
  wordSpacing: "-0.2em",
  fontSize: ["1.5rem", "2rem"],
  lineHeight: ["2rem", "2.5rem"],
  m: 0,
  mb: 6
};

export const wrapperStyles = {
  gridColumn: ["1/10", "2/9", "2/8", "3/7"],
  fontFamily: "heading",
  px: ["3rem", 0],
  py: "3rem",
  width: "100%",
  "&:nth-of-type(even)": {
    gridColumn: ["1/10", "2/9", "3/9", "4/8"],
    textAlign: "end"
  }
};
