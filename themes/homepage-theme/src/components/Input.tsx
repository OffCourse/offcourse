import React, { FunctionComponent, ChangeEvent } from "react";
import styled from "@emotion/styled";
import { IThemeable } from "@offcourse/interfaces";
import { IInput } from "@offcourse/interfaces/src/form";
import { formatTitle, lowerCase, formatValue } from "./helpers";

const Input: FunctionComponent<IInput & IThemeable> = ({
  className,
  placeholder,
  name,
  value = "",
  onChange,
  onBlur,
  type = "text",
  autoComplete = false,
  autoFocus = false,
  disabled = false,
  required = false,
  isNormalized = true
}) => {
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
    type: type,
    autoComplete: `${autoComplete}`,
    autoFocus: autoFocus,
    disabled,
    value: formatValue(value, isNormalized),
    placeholder: placeholder
      ? formatTitle(placeholder)
      : formatTitle(`enter your ${name}`),
    onChange: handleChange,
    required,
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
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: ${({ theme }) => theme.lineHeights[2]};
    box-sizing: border-box;
    color: ${({ theme }) => theme.grayScale[4]};

    ::placeholder {
      color: ${({ theme }) => theme.grayScale[2]};
    }

    :selection {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primary};
    }

    &:focus {
      outline: none;
    }
  }
`;
