import { SxStyleProp } from "theme-ui";

const avatarStyles: SxStyleProp = {};

const outerWrapperStyles: SxStyleProp = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bg: "transparant",
  zIndex: 100,
  alignContent: "center",
  p: [3, 4],
  height: ["4rem", "5rem"],
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between"
};

const menuItemsStyles: SxStyleProp = {
  display: "flex",
  flex: 1,
  flexDirection: "row",
  justifyContent: "space-between"
};

export { outerWrapperStyles, menuItemsStyles, avatarStyles };
