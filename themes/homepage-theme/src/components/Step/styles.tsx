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
  display: "grid",
  fontFamily: "heading",
  maxWidth: ["30rem", "48rem", "64rem", "80rem"],
  minWidth: ["16rem", "21rem", "39rem", "48rem"],
  pr: [0, "5rem", "5rem", "20rem"],
  pl: 0,
  width: "100%",
  "&:nth-of-type(even)": {
    textAlign: "end",
    pl: [0, "5rem", "5rem", "20rem"],
    pr: 0
  }
};
