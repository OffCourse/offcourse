/** @jsx jsx */
import { FunctionComponent } from "react";
import { IInputField } from "@offcourse/interfaces/src/form";
import { IThemeable } from "@offcourse/interfaces/src";
declare type InputFieldProps = IInputField & IThemeable;
declare const InputField: FunctionComponent<InputFieldProps>;
export default InputField;
