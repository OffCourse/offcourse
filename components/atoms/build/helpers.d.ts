import { lowerCase } from "voca";
import { compose } from "ramda";
declare const formatTitle: (str: string) => string;
declare const formatValue: (value: string, isNormalized: boolean) => string;
export { compose, lowerCase, formatTitle, formatValue };
