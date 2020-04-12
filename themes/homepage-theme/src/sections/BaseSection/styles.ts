import { SxStyleProp } from "theme-ui";

export const wrapperStyles: SxStyleProp = {
  px: [6, 6, 8, 8],
  py: [8, 8, 8, 8],
  bg: "grayScale.1",
  display: "grid",
  gridColumnGap: [2, 4, 4, 4],
  justifyContent: "center",
  gridTemplateColumns: ["repeat(9, 1fr)", "repeat(12, minmax(auto, 4rem))"],
};
