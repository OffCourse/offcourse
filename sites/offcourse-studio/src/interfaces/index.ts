export interface IPublishable {
  publishable: boolean;
}

export interface IMeasurable {
  width?: number;
  left?: number;
  top?: number;
  height?: number;
}

type Size = "SMALL" | "NORMAL" | "LARGE";

interface IColor {
  primary: string;
  negative: string;
  secondary: string;
  error: string;
}

interface IFonts {
  heading: string[];
  monospace: string[];
  base: string[];
}

interface ITheme {
  grayScale: string[];
  colors: IColor;
  space: string[];
  breakpoints: string[];
  fonts: IFonts;
  fontSizes: string[];
  lineHeights: string[];
}

export interface IStylable {
  className?: string;
  size?: Size;
  backdropPath?: string;
  foreground?: string;
  background?: string;
  theme?: ITheme;
  isVisible?: boolean;
  isBasic?: boolean;
}

export interface IInput {
  placeholder?: string;
  name: string;
  type?: string;
  value?: string;
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
