import { Variant } from "@offcourse/enums";

export interface ISVG {
  svg: string;
  dimensions: {
    width: number;
    height: number;
  };
  background: string;
}

export interface ITheme {
  name: string;
  avatars: { [error: string]: ISVG };
  buttonSizes: any;
  breakpoints: string[];
  fontSizes: string[];
  lineHeights: string[];
  logo: ISVG;
  space: string[];
  colors: { [signal in Variant]: string };
  borders: string[];
  fonts: { [fontName: string]: string };
  grayScale: string[];
  globals: string;
  signalColors: { [signal in Variant]: { color: string } };
  signalColorCombos: { [signal in Variant]: any };
  widths: any;
}
