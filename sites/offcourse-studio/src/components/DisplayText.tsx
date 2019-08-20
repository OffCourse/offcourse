import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { IStylable } from "../interfaces";

type DisplayTextProps = {
  children: string;
  isOneToken?: boolean;
};

const DisplayText: FunctionComponent<DisplayTextProps & IStylable> = ({
  children,
  className
}) => {
  const words = children.split(" ");
  return (
    <div className={className}>
      {words.map((word, index) => (
        <span key={index}>
          <h1>{word}</h1>
        </span>
      ))}
    </div>
  );
};

export default styled(DisplayText)`
  user-select: none;
  h1 {
    padding: 0rem 0.4rem;
    margin: 0 0.4rem 0.4rem 0;
    word-spacing: "-0.2em";
    display: inline-block;
    color: ${({ theme }) => theme.grayScale[0]};
    background-color: ${({ theme }) => theme.grayScale[4]};
    font-family: ${({ theme }) => theme.fonts.monospace};
    font-size: 2rem;
  }

  &:last-type {
    h1 {
      margin-bottom: 0;
      margin-right: 0;
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    h1 {
      font-size: 2.5rem;
      padding: 0rem 0.5rem;
      margin: 0 0.5rem 0.5rem 0;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    h1 {
      font-size: 3rem;
      padding: 0rem 0.6rem;
      margin: 0 0.6rem 0.6rem 0;
    }
  }
`;
