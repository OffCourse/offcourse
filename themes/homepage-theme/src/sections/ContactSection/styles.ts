import { SxStyleProp } from "theme-ui";

export const wrapperStyles: SxStyleProp = {
  gridTemplateRows: ["auto 1fr", "auto 1fr", "1fr"],
  position: "relative",
  bg: "transparent",
  py: [0, 0, 7],
};

export const sloganSpaceStyles: SxStyleProp = {
  display: "flex",
  position: "relative",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  alignItems: "center",
  gridColumn: ["1/12", "1/13", "1/13", "1/6", "1/6"],
  py: [7],
  gridRow: ["1/2"],
};

export const formStyles = {
  gridColumn: ["1/13", "1/13", "1/13", "6/13", "7/13"],
  bg: "grayScale.0",
  gridRow: ["2/3", "2/3", "2/3", "1/2"],
  mb: [6, 6, 6, 0],
  px: [4, 6],
  py: 6,
};
