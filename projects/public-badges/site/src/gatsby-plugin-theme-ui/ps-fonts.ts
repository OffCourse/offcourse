// @ts-nocheck

import DA from "../fonts/DIN Alternate/DINAlternate-Bold.woff";
import Manrope from "../fonts/manrope/ManropeGX.ttf";

const fonts = {
  body: {
    fontFamily: "Manrope",
    fontWeight: 450,
    url: Manrope,
    format: "ttf"
  },
  heading: {
    fontFamily: "Manrope",
    fontWeight: 650,
    url: Manrope,
    format: "ttf"
  },
  monospace: {
    fontFamily: "DIN Alternate",
    fontWeight: 700,
    url: DA,
    format: "woff"
  }
};

export default fonts;
