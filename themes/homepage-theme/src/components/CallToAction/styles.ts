import { SxStyleProp } from "theme-ui";

const wrapperStyles: SxStyleProp = {
  userSelect: "none",
  position: "fixed",
  top: 0,
  right: 0,
  height: ["4rem", "5rem"],

  bg: "transparent",
  // display: "flex",
  display: "none",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  py: 0,
  px: 4,
  width: "60%",
  zIndex: 100
};

export { wrapperStyles };
