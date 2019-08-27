import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { IThemeable } from "../interfaces";
import { IInput } from "../interfaces/form";
import { formatTitle } from "./helpers";

const TextArea: FunctionComponent<IInput & IThemeable> = ({
  className,
  placeholder = "Enter Something",
  name,
  value = "",
  onChange,
  onBlur,
  rows = 4,
  autoFocus = false,
  disabled = false
}) => {
  return (
    <div className={className}>
      <textarea
        autoFocus={autoFocus}
        rows={rows}
        name={name}
        disabled={disabled}
        value={value}
        placeholder={formatTitle(placeholder)}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default styled(TextArea)`
  display: flex;
  flex: 1;
  align-items: center;
  padding: ${({ theme }) => theme.space[4]} 0;
  margin: 0;
  box-sizing: border-box;
  grid-template-areas: "input";
  background-color: ${({ theme }) => theme.grayScale[1]};

  textarea {
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
