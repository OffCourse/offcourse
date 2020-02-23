import { ComponentType } from "react";
export interface IPublishable {
  publishable: boolean;
}

export interface IIndexable {
  index: number;
}

export interface IMeasurable {
  width?: number;
  left?: number;
  clientWidth?: number;
  clientHeight?: number;
  top?: number;
  height?: number;
}

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

export interface IStylable {
  backdropPath?: string;
  primaryColor?: string;
  secondaryColor?: string;
  isVisible?: boolean;
  isBasic?: boolean;
}

export interface ILink {
  href: string;
  title: string;
}

export interface ITab {
  children: string;
  href?: string;
}

export interface IMessage {
  children: string;
}

export interface IButton {
  type?: "submit" | "button";
  children: string;
  disabled?: boolean;
}
