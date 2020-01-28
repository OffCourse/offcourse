// @ts-nocheck
import NB from "../fonts/Nitti/NB.woff";
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
    fontFamily: "Nitti Bold",
    fontWeight: 700,
    url: NB,
    format: "woff"
  }
};

export default fonts;
