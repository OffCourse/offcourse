/** @jsx jsx */
import { FunctionComponent } from "react";
import { IThemeable } from "@offcourse/interfaces/src";
interface ITextSection {
    title: string;
    description: string;
}
declare type TextColumnProps = ITextSection & IThemeable;
declare const TextSection: FunctionComponent<TextColumnProps>;
export default TextSection;
