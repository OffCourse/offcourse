import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import DisplayText from "./DisplayText";
import { IStylable } from "../interfaces";

const Logo: FunctionComponent<IStylable> = ({ className }) => {
  return <DisplayText className={className}>Offcourse Studio</DisplayText>;
};

export default styled(Logo)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  h1 {
    margin-right: 0;
    font-size: 2rem;
    margin: 0 0 0.4rem 0;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    h1 {
      font-size: 2.5rem;
      margin: 0 0 0.5rem 0;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    h1 {
      font-size: 3rem;
      margin: 0 0 0.6rem 0;
    }
  }
`;
