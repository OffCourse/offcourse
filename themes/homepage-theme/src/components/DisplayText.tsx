import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { IThemeable } from "@offcourse/interfaces";

type DisplayTextProps = {
  children: string;
  isOneToken?: boolean;
} & IThemeable;

const DisplayText: FunctionComponent<DisplayTextProps> = ({
  children,
  className
}) => {
  return <h1 className={className}>{children}</h1>;
};

export default styled(DisplayText)`
  user-select: none;
  padding: 0rem 0.4rem;
  margin: 0 0.4rem 0.4rem 0;
  display: inline-block;
  font-size: 2rem;

  &:last-type {
    margin-bottom: 0;
    margin-right: 0;
  }
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: 2.5rem;
    padding: 0rem 0.5rem;
    margin: 0 0.5rem 0.5rem 0;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    font-size: 3rem;
    padding: 0rem 0.6rem;
    margin: 0 0.6rem 0.6rem 0;
  }
`;
