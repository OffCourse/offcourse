/** @jsx jsx */
import { FunctionComponent } from "react";
import { IThemeable, IButton } from "@offcourse/interfaces/src";
declare type ButtonProps = IButton & IThemeable;
declare const Button: FunctionComponent<ButtonProps>;
export default Button;
