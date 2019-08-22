import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { IStylable } from "../interfaces";

const Button: FunctionComponent<IStylable> = ({
  type,
  className,
  children
}) => {
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
};

export default styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.813rem;
  box-sizing: border-box;
  user-select: none;
  text-decoration: inherit;
  border: 0;
  border-bottom: 0.125rem solid;
  padding: ${({ theme }) => `${theme.space[4]} ${theme.space[6]}`};
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.grayScale[4]};
  border-color: ${({ theme }) => theme.grayScale[4]};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  line-height: ${({ theme }) => theme.lineHeights[2]};
  width: 100%;

  :focus {
    outline: none;
  }

  :disabled {
    cursor: default;
  }

  &:hover {
    background-color: ${({ theme }) => theme.grayScale[4]};
    border-color: ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.grayScale[0]};
  }
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 8rem;
  }
`;
