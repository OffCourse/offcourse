import React, { ReactNode, FunctionComponent } from "react";
import styled from "@emotion/styled";
import { IThemeable } from "../interfaces";
import { IInputField } from "../interfaces/form";
import { Field, ErrorMessage } from "formik";
import Input from "./Input";
import Message from "./Message";
import TextArea from "./TextArea";
import { formatTitle } from "./helpers";
import RadioButtonGroup from "./RadioButtonGroup";

const components: { [key: string]: ReactNode } = {
  text: Input,
  email: Input,
  tel: Input,
  radio: RadioButtonGroup,
  textarea: TextArea
};

type InputFieldProps = IInputField & IThemeable;

const InputField: FunctionComponent<InputFieldProps> = ({
  className,
  label,
  type = "text",
  options,
  name
}) => {
  const Component = components[type || "text"];
  return (
    <div className={className}>
      <label>{formatTitle(label)}</label>
      <ErrorMessage
        render={msg => <Message isBasic={true}>{msg}</Message>}
        name={name}
      />
      <Field as={Component} options={options} name={name} />
    </div>
  );
};

export default styled(InputField)`
  display: flex;
  flex-direction: column;
  padding: 0;
  label {
    padding: 0 ${({ theme }) => theme.space[6]};
    padding-bottom: ${({ theme }) => theme.space[4]};
    user-select: none;
  }
`;
