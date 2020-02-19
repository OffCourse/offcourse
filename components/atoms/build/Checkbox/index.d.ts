/** @jsx jsx */
import { FunctionComponent } from "react";
import { IThemeable } from "@offcourse/interfaces/src";
import { IInput } from "@offcourse/interfaces/src/form";
declare type CheckboxProps = IInput & IThemeable;
declare const Checkbox: FunctionComponent<CheckboxProps>;
export default Checkbox;
