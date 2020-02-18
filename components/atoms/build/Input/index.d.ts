/** @jsx jsx */
import { FunctionComponent } from "react";
import { IThemeable } from "@offcourse/interfaces/src";
import { IInput } from "@offcourse/interfaces/src/form";
declare type InputProps = IInput & IThemeable;
declare const Input: FunctionComponent<InputProps>;
export default Input;
