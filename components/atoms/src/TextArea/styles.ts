import { SxStyleProp } from "theme-ui";
import {
  wrapperStyles as inputWrapperStyles,
  inputStyles
} from "../Input/styles";

export const wrapperStyles: SxStyleProp = { ...inputWrapperStyles };

export const textAreaStyles: SxStyleProp = {
  ...inputStyles,
  fontFamily: "body",
  fontSize: 1,
  lineHeight: 1
};
