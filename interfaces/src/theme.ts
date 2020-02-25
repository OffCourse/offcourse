import { ComponentType } from "react";

interface IColor {
  primary: string;
  background: string;
  text: string;
  negative: string;
  secondary: string;
  error: string;
  grayScale: string[];
}

interface IFonts {
  heading: string;
  monospace: string;
  body: string;
}

export interface ITheme {
  grayScale: string[];
  colors: IColor;
  space: string[];
  breakpoints: string[];
  fonts: IFonts;
  fontSizes: string[];
  lineHeights: string[];
  styles: any;
  globals: any;
  Provider?: any;
}

export interface IThemeable {
  className?: string;
  theme?: ITheme;
  id?: string;
  as?: keyof JSX.IntrinsicElements | ComponentType<any>;
  style?: any;
}

