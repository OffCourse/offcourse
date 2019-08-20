import React, { FunctionComponent, ChangeEvent } from "react";
import styled from "@emotion/styled";
import { IStylable } from "../interfaces";
import { formatTitle, lowerCase, formatValue } from "./helpers";

type InputProps = {
  placeholder: string;
  name: string;
  type: string;
  value: string;
  autoComplete: boolean;
  autoFocus: boolean;
  isDisabled: boolean;
  isNormalized: boolean;
};

const Input: FunctionComponent<InputProps & IStylable> = ({
  className,
  placeholder = "Enter Something",
  name,
  value,
  onChange,
  onBlur,
  inputType = "text",
  autoComplete = false,
  autoFocus = false,
  isDisabled = false,
  isNormalized = true
}) => {
  console.log(autoFocus);
  const handleChange: (event: ChangeEvent<HTMLInputElement>) => void = e => {
    if (!onChange) {
      return;
    }
    if (!isNormalized) {
      return onChange(e);
    }

    const value = lowerCase(e.target.value);
    e.target.value = value;
    return onChange(e);
  };

  const baseProps = {
    name: name,
    type: inputType,
    autoComplete: `${autoComplete}`,
    autoFocus: autoFocus,
    disabled: isDisabled,
    value: formatValue(value, isNormalized),
    placeholder: formatTitle(placeholder),
    onChange: handleChange,
    onBlur: onBlur
  };
  return (
    <div className={className}>
      <input {...baseProps} />
    </div>
  );
};

export default styled(Input)`
  display: flex;
  flex: 1;
  align-items: center;
  padding: ${({ theme }) => theme.space[4]} 0;
  margin: 0;
  box-sizing: border-box;
  grid-template-areas: "input";
  background-color: ${({ theme }) => theme.grayScale[1]};

  input {
    width: 100%;
    padding: 0 ${({ theme }) => theme.space[6]};
    background-color: ${({ theme }) => theme.grayScale[1]};
    margin: 0;
    justify-content: center;
    align-content: center;
    border: 0 solid;
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: ${({ theme }) => theme.lineHeights[2]};
    box-sizing: border-box;
    color: ${({ theme }) => theme.grayScale[4]};

    ::placeholder {
      color: ${({ theme }) => theme.grayScale[2]};
    }

    :selection {
      background-color: ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors.blue};
    }

    &:focus {
      outline: none;
    }
  }
`;
