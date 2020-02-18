/** @jsx jsx */
import { FunctionComponent } from "react";
import { IInput } from "@offcourse/interfaces/src/form";
import { IThemeable } from "@offcourse/interfaces/src";
declare type TextAreaProps = IInput & IThemeable;
declare const TextArea: FunctionComponent<TextAreaProps>;
export default TextArea;
