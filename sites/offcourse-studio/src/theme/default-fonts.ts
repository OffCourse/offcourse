import FSR from "../fonts/Fira Sans/FiraSans-Regular.otf"
import FSB from "../fonts/Fira Sans/FiraSans-Bold.otf"
import FCB from "../fonts/Fira Code/FiraCode-Bold.woff2"

const fonts = {
    body: { fontFamily: "Fira Sans Regular", fontWeight: 400, url: FSR, format: "opentype" },
    heading: { fontFamily: "Fira Sans Bold", fontWeight: 700, url: FSB, format: "opentype" },
    monospace: { fontFamily: "Fira Code Bold", fontWeight: 700, url: FCB, format: "woff2" }
}

export default fonts;
