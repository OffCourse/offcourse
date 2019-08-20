import React, { FunctionComponent, ChangeEvent, FormEvent } from "react";
import styled from "@emotion/styled";
import { IStylable } from "../interfaces";
import Input from "./Input";
import { formatTitle } from "./Input/helpers";

type InputFieldProps = {
  title: string;
};

const InputField: FunctionComponent<IStylable & InputFieldProps> = ({
  className,
  children,
  title,
  ...rest
}) => (
  <div className={className}>
    <label>{formatTitle(title)}</label>
    {children ? children : <Input {...rest} />}
  </div>
);

export default styled(InputField)`
  display: flex;
  flex-direction: column;
  padding: 0;
  label {
    padding: 0 ${({ theme }) => theme.space[6]};
    padding-bottom: ${({ theme }) => theme.space[4]};
  }
`;
