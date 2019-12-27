import { SxStyleProp } from "theme-ui";

export const wrapperStyles: SxStyleProp = {
  display: "flex",
  userSelect: "none",
  p: [2, 3],
  boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
  bg: "white",
  "&:hover": {
    bg: "grayScale.4",
    a: {
      color: "grayScale.1",
      borderColor: "grayScale.1"
    }
  }
};

export const linkStyles = {
  color: "negative",
  borderColor: "negative",
  fontSize: [1, 2],
  lineHeight: [2, 3],
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
