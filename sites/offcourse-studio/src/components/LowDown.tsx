import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import DisplayText from "./DisplayText";
import { IStylable } from "../interfaces";

const LowDown: FunctionComponent<IStylable> = ({ children, className }) => {
  return (
    <div className={className}>
      <DisplayText>{children}</DisplayText>
    </div>
  );
};

export default styled(LowDown)`
  display: flex;
  ${DisplayText} {
    h1 {
      font-size: 2.5rem;
      padding: 0rem 0.5rem;
      margin: 0 0.5rem 0.5rem 0;
    }

    @media only screen and (min-width: ${({ theme }) => theme.breakpoints[0]}) {
      h1 {
        font-size: 3rem;
        padding: 0rem 0.6rem;
        margin: 0 0.6rem 0.6rem 0;
      }
    }

    @media only screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
      h1 {
        font-size: 4rem;
        padding: 0rem 0.8rem;
        margin: 0 0.8rem 0.8rem 0;
      }
    }
  }
`;
