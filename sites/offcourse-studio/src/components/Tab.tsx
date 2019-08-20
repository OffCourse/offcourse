import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { Styled } from "theme-ui";
import { IStylable } from "../interfaces";
import Link from "./Link";

const Tab: FunctionComponent<IStylable> = ({ className }) => {
  return (
    <div className={className}>
      <Link href="#contact">Work With Us</Link>
    </div>
  );
};

export default styled(Tab)`
  display: flex;
  padding: 0.5rem;
  background-color: white;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    padding: 0.75rem;
    ${Link} {
      font-size: ${({ theme }) => theme.fontSizes[2]};
      line-height: ${({ theme }) => theme.lineHeights[3]};
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    padding: 1rem;
    ${Link} {
      font-size: ${({ theme }) => theme.fontSizes[3]};
      line-height: ${({ theme }) => theme.lineHeights[4]};
    }
  }
`;
