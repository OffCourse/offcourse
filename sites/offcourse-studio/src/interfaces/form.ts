import { ChangeEvent, FocusEvent } from "react";

type InputType = "text" | "email" | "tel" | "radio" | "textarea";

export interface IInputField {
  options: any[];
  placeholder?: string;
  name: string;
  type?: InputType;
  label: string;
}

export type IInput = IInputField & {
  value?: string;
  autoComplete?: boolean;
  autoFocus?: boolean;
  disabled?: boolean;
  required?: boolean;
  checked?: boolean;
  isNormalized?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
}

export interface IFormValues {
  [key: string]: string;
}

export interface IFormFieldOptions {
  value: string;
  label: string;
}
export interface IFormField {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "radio" | "textarea";
  options?: IFormFieldOptions[];
}

export type IFormSchema = IFormField[];

export interface IForm {
  title: string;
  callToAction?: string;
  values: IFormValues;
  canSubmit: boolean;
  fields: IFormSchema;
}
