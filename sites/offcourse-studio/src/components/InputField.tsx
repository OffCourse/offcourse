import React, { FunctionComponent, ChangeEvent, FormEvent } from "react";
import styled from "@emotion/styled";
import Input from "./Input";
import { formatTitle } from "./Input/helpers";

const InputField = ({ title, className, ...rest }) => (
  <div className={className}>
    <label>{formatTitle(title)}</label>
    <Input {...rest} />
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
