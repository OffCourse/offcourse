import typescript from "rollup-plugin-typescript2";
import svgr from "@svgr/rollup";
import pkg from "./package.json";

export default {
  input: "./src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "es"
    }
  ],
  external: ["@offcourse/types", "react"],
  plugins: [
    svgr(),
    typescript({
        clean: true,
        objectHashIgnoreUnknownHack: true,
        typescript: require('typescript'),
    })]
};
