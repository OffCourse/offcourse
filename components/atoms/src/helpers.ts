import { trimLeft, titleCase, lowerCase } from "voca";
import { compose } from "ramda";

const titleize: (str: string) => string = (str: string) =>
  titleCase(str, ["'", "-", "’"]);

const formatTitle: (str: string) => string = compose(
  trimLeft,
  titleize,
  lowerCase
);

const formatValue: (value: string, isNormalized: boolean) => string = (value, isNormalized) => {
  if (!value) {
    return value;
  }
  return isNormalized ? formatTitle(value) : value;
};

export { compose, lowerCase, formatTitle, formatValue };
