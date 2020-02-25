/** @jsx jsx */
import { FunctionComponent } from "react";
import { IThemeable, IInputField } from "@offcourse/interfaces/src";
declare type InputFieldProps = IInputField & IThemeable;
declare const InputField: FunctionComponent<InputFieldProps>;
export default InputField;
