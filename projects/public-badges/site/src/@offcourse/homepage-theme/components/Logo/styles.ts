import { SxStyleProp } from "theme-ui";

import {
  wrapperStyles as parentWrapperStyles,
  textStyles as parentTextStyles
} from "@offcourse/homepage-theme/src/components/Logo/styles";

const wrapperStyles: SxStyleProp = {
  ...parentWrapperStyles,
  justifyContent: "center",
  alignContent: "center",
  textAlign: "center"
};

const textStyles = {
  ...parentTextStyles,
  color: "black",
  fontSize: ["3rem", "3rem", "3rem", "3rem"]
};

export { wrapperStyles, textStyles };
