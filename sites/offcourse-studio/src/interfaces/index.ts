export interface IPublishable {
  publishable: boolean;
}

export interface IMeasurable {
  width?: number;
  left?: number;
  top?: number;
  height?: number;
}

export interface IPageSection {
  title: string;
  backdropPath?: string;
  role: string;
  publishable: boolean;
  sectionIndex: number;
}

type Size = "SMALL" | "NORMAL" | "LARGE";

interface IColor {
  primary: string;
  negative: string;
  secondary: string;
}

interface IFonts {
  heading: string[];
  monospace: string[];
  base: string[];
}

interface ITheme {
  grayScale: string[];
  colors: IColor;
  breakpoints: string[];
  fonts: IFonts;
  fontSizes: string[];
  lineHeights: string[];
  space: string[];
}

export interface IStylable {
  className?: string;
  size?: Size;
  backdropPath?: string;
  foreground?: string;
  background?: string;
  theme?: ITheme;
  isVisible: boolean;
}

export interface IInput {
  placeholder?: string;
  name: string;
  type?: string;
  value?: string;
  label?: string;
  options: any[];
  autoComplete?: boolean;
  autoFocus?: boolean;
  isDisabled?: boolean;
  checked?: boolean;
  isNormalized?: boolean;
};

export interface ILink {
  href: string;
}

export interface IButton {
  type: string;
  disabled: boolean;
}
