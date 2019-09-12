export const itemStyles = {
  display: "grid",
  "&:nth-of-type(odd)": {
    bg: "primary"
  }
};

export const wrapperStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(6, 1fr)",
  width: ["600vw", "600vw", "200vw"]
};
