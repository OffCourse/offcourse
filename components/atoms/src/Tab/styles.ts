import { SxStyleProp } from "theme-ui";

export const wrapperStyles: SxStyleProp = {
  display: "flex",
  userSelect: "none",
  boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
  px: [2, 4],
  height: ["2.5rem", "3rem"],
  alignItems: "center",
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
  lineHeight: [3, 4],
  fontSize: [3, 4],
  bg: "transparent",
  textAlign: "inherit",
  p: 0,
  wordSpacing: "-0.2em",
  userSelect: "none",
  textDecoration: "none",
  fontFamily: "monospace",
  fontWeight: "bold",
  ":focus": {
    outline: "none"
  }
};
