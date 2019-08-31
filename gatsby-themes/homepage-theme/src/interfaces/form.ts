import { ChangeEvent, FocusEvent } from "react";

type InputType = "text" | "email" | "tel" | "radio" | "textarea";

export interface IInputField {
  placeholder?: string;
  name: string;
  type?: InputType;
  label: string;
  options?: IFormFieldOptions[];
}

export type IInput = IInputField & {
  value?: string;
  autoComplete?: boolean;
  autoFocus?: boolean;
  disabled?: boolean;
  required?: boolean;
  checked?: boolean;
  isNormalized?: boolean;
  rows?: number;
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export interface IFormValues {
  [key: string]: string;
}

export interface IFormFieldOptions {
  value: string;
  label: string;
}

export type IFormSchema = IInputField[];

export interface IForm {
  title: string;
  callToAction?: string;
  values: IFormValues;
  canSubmit: boolean;
  fields: IFormSchema;
}
