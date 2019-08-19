import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { Size } from "@offcourse/enums";
import { Styled } from "theme-ui";
import { IStylable } from "../interfaces";

type DisplayTextProps = {
  children: string;
  isOneToken?: boolean;
};

const DisplayText: FunctionComponent<DisplayTextProps & IStylable> = ({
  children,
  className,
  isOneToken = false
}) => (
  <span className={className}>
    <Styled.h1 className={isOneToken && "isOneToken"} size={Size.EXTRA_LARGE}>
      {children}
    </Styled.h1>
  </span>
);

const sizes = {
  SMALL: ["2rem", "0.4rem"],
  NORMAL: ["2.5rem", "0.5rem"],
  LARGE: ["3rem", "0.6rem"]
};

export default styled(DisplayText)`
  h1 {
    padding: 0rem 0.5rem;
    font-size: ${({ size }) => sizes[size || "NORMAL"][0]};
    margin-bottom: ${({ size }) => sizes[size || "NORMAL"][1]};
    margin-right: ${({ size }) => sizes[size || "NORMAL"][1]};
    word-spacing: "-0.2em";
    font-family: ${({ theme }) => theme.fonts.monospace};
    display: inline-block;
    color: ${({ theme }) => theme.grayScale[0]};
    background-color: ${({ theme }) => theme.grayScale[4]};

    &.isOneToken {
      width: 2.5rem;
      text-align: center;
    }
  }

  &:last-of-type {
    h1 {
      margin-bottom: 0;
       margin-right: 0;
    }
  }

/* @media only screen and (min-width: ${({ theme }) =>
  theme.breakpoints[1]}) { */
/* h1 { */
/* font-size: 3rem; */
/* margin-bottom: 0.75rem; */
/* margin-right: 0.75rem; */
/* padding: 0rem 0.75rem; */
/*  */
/* &.isOneToken { */
/* width: 3.75rem; */
/* } */
/* } */
/* } */
/* @media only screen and (min-width: ${({ theme }) =>
  theme.breakpoints[2]}) { */
/* h1 { */
/* font-size: 4rem; */
/* margin-bottom: 1rem; */
/* margin-right: 1rem; */
/* padding: 0rem 1rem; */
/*  */
/* &.isOneToken { */
/* width: 5rem; */
/* } */
/* } */
/* } */
`;
