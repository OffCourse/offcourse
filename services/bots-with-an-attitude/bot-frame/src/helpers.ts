import { ISentence } from "./interfaces";

export const formatter: (opts: ISentence) => string = ({ verb, object, results }) =>
  `You asked me to ${verb} ${object}. I found: ${JSON.stringify(results)}`;

export const createRegex: (opts: ISentence) => RegExp = ({ verb, objects }) =>
  new RegExp(`${verb} (${objects.join("|")})`, "i");
