export default {
  display: "grid",
  gridTemplateColumns: "repeat(9, 1fr)",
  bg: "grayScale.0",
  "&:nth-of-type(odd)": {
    bg: "secondary"
  }
};
