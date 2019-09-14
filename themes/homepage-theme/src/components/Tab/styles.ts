export const wrapperStyles = {
  display: "flex",
  userSelect: "none",
  p: [4, 5],
  boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
  bg: "primary",
  "&:hover": {
    bg: "grayScale.4",
    a: {
      color: "grayScale.1"
    }
  }
};

export const linkStyles = {
  color: "negative",
  borderColor: "negative",
  fontSize: 2,
  lineHeight: 3,
  border: "none",
  bg: "transparent",
  textAlign: "inherit",
  p: 0,
  userSelect: "none",
  boxSizing: "border-box",
  fontFamily: "heading",
  fontWeight: "bold",
  borderBottom: "0.125rem solid black",
  textDecoration: "inherit",
  ":focus": {
    outline: "none"
  }
};
