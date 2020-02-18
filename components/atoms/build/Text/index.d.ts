/** @jsx jsx */
import { FunctionComponent } from "react";
import { IThemeable } from "@offcourse/interfaces/src";
declare type TextProps = {
    children?: string | string[];
    html?: string;
} & IThemeable;
declare const Text: FunctionComponent<TextProps>;
export default Text;
