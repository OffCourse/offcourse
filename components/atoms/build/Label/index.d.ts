/** @jsx jsx */
import { FunctionComponent } from "react";
import { IThemeable } from "@offcourse/interfaces/src";
declare type LabelProps = {
    children: string;
    htmlFor?: string;
} & IThemeable;
declare const Label: FunctionComponent<LabelProps>;
export default Label;
