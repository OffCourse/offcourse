import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { IButton, IStylable } from "../interfaces";

const Button: FunctionComponent<IStylable & IButton> = ({
  type,
  className,
  children,
  disabled
}) => {
  return (
    <button disabled={disabled} type={type} className={className}>
      {children}
    </button>
  );
};

export default styled(Button)`
  display: flex;
  user-select: none;
  align-items: center;
  justify-content: center;
  height: 2.813rem;
  box-sizing: border-box;
  user-select: none;
  text-decoration: inherit;
  border: 0;
  border-bottom: 0.125rem solid black;
  padding: ${({ theme }) => `${theme.space[4]} ${theme.space[6]}`};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.negative};
  border-color: ${({ theme }) => theme.grayScale[4]};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  line-height: ${({ theme }) => theme.lineHeights[2]};
  width: 100%;

  :focus {
    outline: none;
  }

  :disabled,
  &:hover:disabled {
    cursor: default;
    background-color: ${({ theme }) => theme.grayScale[2]};
    color: ${({ theme }) => theme.grayScale[1]};
    border-color: ${({ theme }) => theme.grayScale[1]};
  }

  &:hover {
    background-color: ${({ theme }) => theme.grayScale[4]};
    color: ${({ theme }) => theme.grayScale[0]};
    border-color: ${({ theme }) => theme.colors.primary};
  }
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
  }
`;
