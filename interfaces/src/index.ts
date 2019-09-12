export interface IPublishable {
  publishable: boolean;
}

export interface IMeasurable {
  width?: number;
  left?: number;
  top?: number;
  height?: number;
}

interface IColor {
  primary: string;
  negative: string;
  secondary: string;
  error: string;
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
}

export interface IThemeable {
  className?: string;
  theme?: ITheme;
  id?: string;
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
}

export interface ITab {
  title: string;
}

export interface IMessage {
  children: string;
};

export interface IButton {
  type?: "submit" | "button";
  disabled?: boolean;
}
