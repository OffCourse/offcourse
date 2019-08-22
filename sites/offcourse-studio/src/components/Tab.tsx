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
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 0 0 0.25rem 0.25rem;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  ${Link} {
    color: ${({ theme }) => theme.grayScale[0]};
    border-color: ${({ theme }) => theme.grayScale[0]};
  }
  :hover {
    background-color: ${({ theme }) => theme.grayScale[4]};
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    border-radius: 0 0 0.5rem 0.5rem;
    padding: 0.75rem;
    ${Link} {
      font-size: ${({ theme }) => theme.fontSizes[2]};
      line-height: ${({ theme }) => theme.lineHeights[3]};
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    padding: 1rem;
    border-radius: 0 0 0.75rem 0.75rem;
    ${Link} {
      font-size: ${({ theme }) => theme.fontSizes[3]};
      line-height: ${({ theme }) => theme.lineHeights[4]};
    }
  }
`;
