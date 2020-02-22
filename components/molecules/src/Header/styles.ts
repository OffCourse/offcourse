import { SxStyleProp } from "theme-ui";

export const outerWrapperStyles: SxStyleProp = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  display: "grid",
  bg: "transparant",
  zIndex: 100,
  alignContent: "center",
  justifyContent: "stretch"
};

export const menuStyles: SxStyleProp = {
  bg: "transparant",
  px: [4],
  py: [4],
  display: "flex",
  flexDirection: ["column", "column", "row"],
  alignItems: ["flex-start", "flex-start", "center"],
  justifyItems: "flex-start",
  height: ["12rem", "5rem"],
  "> *": {
    mr: [0, 0, 4],
    mb: [4, 4, 0]
  }
};

export const menuBarStyles: SxStyleProp = {
  height: ["4rem", "5rem"],
  mt: 4,
  px: [4]
};
