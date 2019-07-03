import typescript from "rollup-plugin-typescript";
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
  plugins: [svgr(), typescript()]
};
