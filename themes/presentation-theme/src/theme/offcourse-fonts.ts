// @ts-nocheck

import NB from "../fonts/Nitti/NB.woff";
import NGB from "../fonts/Nitti/NGB.woff";
import NGN from "../fonts/Nitti/NGN.woff";

const fonts = {
  body: {
    fontFamily: "Nitti Grotesk",
    fontWeight: 400,
    url: NGN,
    format: "woff"
  },
  heading: {
    fontFamily: "Nitti Grotesk Bold",
    fontWeight: 700,
    url: NGB,
    format: "woff"
  },
  monospace: {
    fontFamily: "Nitti Bold",
    fontWeight: 700,
    url: NB,
    format: "woff"
  }
};

export default fonts;
