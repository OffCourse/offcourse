import { Variant } from "./enums";

type SVG = {
    svg: string;
    dimensions: {
        width: number;
        height: number;
    };
    background: string;
};

type Logo = SVG;
type Avatar = SVG;

type GrayScale = string[];

type Theme = {
    name: string;
    avatars: { [error: string]: Avatar };
    buttonSizes: any;
    breakpoints: string[];
    fontSizes: string[];
    lineHeights: string[];
    logo: Logo;
    space: string[];
    colors: { [signal in Variant]: string };
    borders: string[];
    fonts: { [fontName: string]: string };
    grayScale: GrayScale;
    globals: string;
    signalColors: { [signal in Variant]: { color: string } };
    signalColorCombos: { [signal in Variant]: any };
    widths: any;
};

export default Theme;
