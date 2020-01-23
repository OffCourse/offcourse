import {
  wrapperStyles as parentWrapperStyles,
  spanStyles as parentSpanStyles,
  textStyles as parentTextStyles
} from "@offcourse/homepage-theme/src/components/DisplayText/styles";

const wrapperStyles = {
  ...parentWrapperStyles
};

const spanStyles = {
  ...parentSpanStyles
};

const textStyles = {
  ...parentTextStyles,
  color: "white",
  fontFamily: "heading",
  fontWeight: 650,
  lineHeight: "3rem",
  mb: "1rem",
  fontSize: ["3rem", "3rem", "3rem", "3rem"]
};

export { wrapperStyles, spanStyles, textStyles };
