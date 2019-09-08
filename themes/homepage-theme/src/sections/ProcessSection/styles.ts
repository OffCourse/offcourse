export const numberStyles = {
  borderBottom: "0.25rem solid black",
  mr: 4
};

export const titleStyles = {
  gridColumn: "2/3",
  fontSize: "3rem",
  maxWidth: ["30rem", "48rem", "64rem", "80rem"],
  minWidth: ["20rem", "30rem", "48rem", "64rem"],
};

export const stepStyles = {
  display: "grid",
  lineHeight: "4rem",
  px: "2rem",
  py: 6,
  margin: 0,
  fontFamily: "heading",
  "&:nth-of-type(even)": {
    alignItems: "end"
  },
  gridTemplateColumns: ["auto 1fr auto"],
};

export const wrapperStyles = {
  gridTemplateRows: ["1fr 1fr 1fr"],
};
