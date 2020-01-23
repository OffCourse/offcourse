import baseTheme from "@offcourse/homepage-theme/src/theme";
import getFontFaces from "@offcourse/homepage-theme/src/theme/utils";
import fonts from "./ps-fonts";
import merge from "lodash.merge";

const baseColors = {
  black: "#000000",
  white: "#FFFFFF",
  darkGray: "#3d3d3d",
  mediumGray: "#c0c4c1",
  lightGray: "#f4f6f4",
  yellow: "#E5CF39",
  red: "#E1241E",
  blue: "#3B87C1",
  darkBlue: "#0074BC",
  green: "#75C7B3"
};

const fontFaces = getFontFaces(fonts);

const globals = `
${fontFaces}
  body {
    top: 0;
    left: 0;
    right: 0;
  }

  ::-webkit-scrollbar {
      width: 0px;  /* remove scrollbar space */
      background: transparent;  /* optional: just make scrollbar invisible */
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }

  body {
    font-family: ManropeGX, Helvetica, sans-serif;
    font-size: 16px;
    line-height: 20px;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
`;

const newTheme = merge({}, baseTheme, {
  colors: {
    primary: baseColors.red,
    secondary: baseColors.red
  },
  fonts: {
    body: `${fonts.body.fontFamily}, Helvetica, sans-serif`,
    heading: `${fonts.heading.fontFamily}, Helvetica Bold, sans-serif`,
    monospace: `${fonts.monospace.fontFamily}, Helvetica Bold, sans-serif`
  },
  globals
});

export default newTheme;
