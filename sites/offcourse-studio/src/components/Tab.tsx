import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { IStylable } from "../interfaces";
import Link from "./Link";

const Tab: FunctionComponent<IStylable> = ({ className, title }) => {
  return (
    <div className={className}>
      <Link href="#contact">{title}</Link>
    </div>
  );
};

export default styled(Tab)`
  display: flex;
  padding: 0.5rem;
  border-radius: 0 0 0.25rem 0.25rem;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.colors.primary};

  ${Link} {
    color: ${({ theme }) => theme.colors.negative};
    border-color: ${({ theme }) => theme.colors.negative};
  }
  :hover {
    background-color: ${({ theme }) => theme.grayScale[4]};
    ${Link} {
      color: ${({ theme }) => theme.colors.primary};
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }

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
