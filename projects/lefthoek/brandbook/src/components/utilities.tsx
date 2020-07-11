import { chain } from "voca";

export const entryTitleCase: (str: string) => string = (str: string) => {
  return chain(str)
    .kebabCase()
    .replaceAll("-", " ")
    .titleCase()
    .value();
};
