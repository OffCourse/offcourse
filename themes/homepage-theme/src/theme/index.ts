import fonts from "./default-fonts";
import { ITheme } from "@offcourse/interfaces/src";

const baseColors = {
  black: "#000000",
  white: "#FFFFFF",
  darkGray: "#3d3d3d",
  mediumGray: "#c0c4c1",
  lightGray: "#f4f6f4",
  yellow: "#E5CF39",
  red: "#E34D2F",
  green: "#A5CC45",
  blue: "#75C7B3"
};

const secondary = baseColors.mediumGray;
const primary = baseColors.lightGray;
const negative =
  primary === baseColors.mediumGray ? baseColors.white : baseColors.black;
const error = baseColors.red;
const grayScale = [
  baseColors.white,
  baseColors.lightGray,
  baseColors.mediumGray,
  baseColors.darkGray,
  baseColors.black
];

const theme: ITheme = {
  colors: {
    primary,
    background: baseColors.yellow,
    text: baseColors.black,
    secondary,
    negative,
    error,
    grayScale
  },
  fonts: {
    body: `${fonts.body.fontFamily}, Helvetica, sans-serif`,
    heading: `${fonts.heading.fontFamily}, Helvetica Bold, sans-serif`,
    monospace: `${fonts.monospace.fontFamily}, Helvetica Bold, sans-serif`
  },

  grayScale,
  fontSizes: ["0.75rem", "1rem", "1.375rem", "1.75rem", "2.5rem", "4rem"],
  breakpoints: ["30rem", "48rem", "64rem", "100rem"],
  lineHeights: [
    "1rem",
    "1.25rem",
    "1.375rem",
    "1.75rem",
    "1.875rem",
    "3rem",
    "4.5rem"
  ],
  space: [
    "0",
    "0.25rem",
    "0.5rem",
    "0.75rem",
    "1rem",
    "1.5rem",
    "2rem",
    "3rem",
    "4rem"
  ],
  styles: {
    root: {
      fontFamily: "body",
      fontSize: 1
    },
    Main: {
      display: "flex",
      justifyContent: "column"
    },
    Header: {
      position: "fixed",
      background: "transparant",
      width: "100%",
      height: "5rem",
      zIndex: 100
    },
    Footer: {
      display: "grid",
      backgroundColor: baseColors.lightGray
    },
    Container: {
      overflowX: "hidden",
      padding: 0,
      maxWidth: "100%"
    },
    p: {
      fontSize: 1,
      lineHeight: 1,
      margin: 0,
      mb: 4,
      fontFamily: "body"
    },
    h1: {
      fontSize: 4,
      lineHeight: 4,
      margin: 0,
      fontFamily: "heading"
    },
    h2: {
      fontSize: 2,
      margin: 0,
      fontFamily: "heading"
    },
    h3: {
      fontSize: 2,
      margin: 0,
      fontFamily: "heading"
    },
    table: {
      fontSize: [1, 2, 2, 3]
    },
    th: {
      color: "white",
      fontWeight: 700,
      p: [2, 4, 4, 6],
      lineHeight: 2,
      textAlign: "left"
    },
    td: {
      p: [2, 4, 4, 6],
      pb: [0, 0, 0, 0],
      lineHeight: [2, 2, 4, 4],
      verticalAlign: "top",
      textAlign: "left"
    }
  },
  globals: {
    body: {
      fontFamily: "body",
      top: 0,
      left: 0,
      right: 0,
      margin: 0,
      "::-webkit-scrollbar": {
        width: "0px",
        background: "transparent"
      }
    },
    "*": {
      webkitFontSmoothing: "antialiased",
      mosOsxFontSmoothing: "grayscale",
      boxSizing: "border-box"
    }
  }
};

export default theme;
