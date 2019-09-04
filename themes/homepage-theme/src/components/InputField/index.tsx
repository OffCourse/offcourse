/** @jsx jsx */
import { ReactNode, FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { IInputField } from "@offcourse/interfaces/src/form";
import { IThemeable } from "@offcourse/interfaces";
import { Field, ErrorMessage } from "formik";
import { formatTitle } from "../helpers";
import Input from "../Input";
import RadioButtonGroup from "../RadioButtonGroup";
import TextArea from "../TextArea";
import Message from "../Message";
import { wrapperStyles, labelStyles } from "./styles";

type InputFieldProps = IInputField & IThemeable;

const components: { [key: string]: ReactNode } = {
  text: Input,
  email: Input,
  tel: Input,
  radio: RadioButtonGroup,
  textarea: TextArea
};

const InputField: FunctionComponent<InputFieldProps> = ({
  className,
  label,
  type = "text",
  options,
  name
}) => {
  const Component = components[type || "text"];
  return (
    <div className={className} sx={wrapperStyles}>
      <label sx={labelStyles}>{formatTitle(label)}</label>
      <ErrorMessage
        render={msg => <Message isBasic={true}>{msg}</Message>}
        name={name}
      />
      <Field as={Component} options={options} name={name} />
    </div>
  );
};

export default InputField;
