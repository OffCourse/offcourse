export const numberStyles = {
  borderBottom: "0.25rem solid",
  borderColor: "grayScale.4",
  fontFamily: "monospace",
  fontSize: ["3.5rem", "5rem"],
  lineHeight: ["4rem", "5.5rem"],
  mb: 2
};

export const titleStyles = {
  display: "grid",
  fontFamily: "monospace",
  wordSpacing: "-0.2em",
  fontSize: ["1.5rem", "2rem"],
  lineHeight: ["2rem", "2.5rem"],
  m: 0,
  mb: 4
};

export const wrapperStyles = {
  gridColumn: ["2/12", "2/12", "2/11", "3/10"],
  fontFamily: "heading",
  py: 6,
  width: "100%",
  "&:nth-of-type(even)": {
    gridColumn: ["2/12", "2/12", "3/12", "4/11"],
    textAlign: "end"
  }
};
