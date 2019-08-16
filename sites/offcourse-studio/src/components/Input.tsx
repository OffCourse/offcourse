import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { IStylable } from "../interfaces";

type InputProps = {
  placeholder: string;
};

const Input: FunctionComponent<InputProps & IStylable> = ({
  className,
  placeholder = "enter something"
}) => {
  return (
    <div className={className}>
      <input placeholder={placeholder} />
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
      color: ${({ theme }) => theme.grayScale[3]};
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
