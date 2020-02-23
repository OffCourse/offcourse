import { SxStyleProp } from "theme-ui";

const wrapperStyles: SxStyleProp = {
  display: "flex",
  flexDirection: ["column", "row"],
  "> div": {
    ml: [4],
    mb: [4]
  }
};

export { wrapperStyles };
