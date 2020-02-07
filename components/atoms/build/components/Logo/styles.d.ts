import { SxStyleProp } from "theme-ui";
declare const wrapperStyles: SxStyleProp;
declare const spanStyles: SxStyleProp;
declare const textStyles: {
    fontFamily: string;
    display: string;
    fontSize: string[];
    lineHeight: string[];
    wordSpacing: string;
    m: number;
    px: string[];
    mb: number;
    color: string;
    bg: string;
    "&:last-type": {
        mb: number;
        mr: number;
    };
};
export { wrapperStyles, spanStyles, textStyles };
