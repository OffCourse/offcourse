import { SxStyleProp } from "theme-ui";

export const wrapperStyles: SxStyleProp = {
  display: "flex",
  flex: 1,
  alignItems: "center",
  py: 2,
  px: 0,
  m: 0,
  boxSizing: "border-box",
  gridTemplateAreas: "input",
  bg: "grayScale.1"
};

export const inputStyles: SxStyleProp = {
  width: "100%",
  py: 0,
  px: 4,
  bg: "grayScale.1",
  m: 0,
  justifyContent: "center",
  alignContent: "center",
  border: 0,
  fontFamily: "heading",
  fontSize: 2,
  lineHeight: 2,
  boxSizing: "border-box",
  color: "grayScale.4",
  "::placeholder": {
    color: "grayScale.2",
    userSelect: "none"
  },
  ":selection": {
    bg: "primary"
  },
  "&:focus": {
    outline: "none"
  }
};
