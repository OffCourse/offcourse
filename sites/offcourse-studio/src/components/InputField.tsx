import React, { FunctionComponent, ChangeEvent, FormEvent } from "react";
import styled from "@emotion/styled";
import { IInput, IStylable } from "../interfaces";
import Input from "./Input";
import TextArea from "./TextArea";
import { formatTitle } from "./helpers";
import RadioButtonGroup from "./RadioButtonGroup";

const inputFields = {
  text: Input,
  email: Input,
  tel: Input,
  radio: RadioButtonGroup,
  textarea: TextArea
};

const InputField: FunctionComponent<IInput & IStylable> = ({
  className,
  label,
  type = "text",
  options,
  ...field
}) => {
  const Component = inputFields[type || "text"];
  return (
    <div className={className}>
      <label>{formatTitle(label)}</label>
      <Component options={options} {...field} />
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
