export const numberStyles = {
  borderBottom: "0.25rem solid black",
  fontSize: "5rem",
  lineHeight: "5.5rem",
  mb: 3
};

export const titleStyles = {
  display: "grid",
  fontSize: "2rem",
  lineHeight: "2.5rem",
  m: 0,
  mb: 6
};

export const wrapperStyles = {
  gridColumn: ["1/10", "2/9", "2/8", "3/7"],
  fontFamily: "heading",
  px: ["2rem", 0],
  py: "2rem",
  width: "100%",
  "&:nth-of-type(even)": {
    gridColumn: ["1/10", "2/9", "3/9", "4/8"],
    textAlign: "end"
  }
};
