import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { IStylable } from "../interfaces";
import Link from "./Link";

interface ITab {
  title: string;
}

const Tab: FunctionComponent<IStylable & ITab> = ({ className, title }) => {
  return (
    <div className={className}>
      <Link href="#contact">{title}</Link>
    </div>
  );
};

export default styled(Tab)`
  display: flex;
  user-select: none;
  padding: 0.5rem;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.colors.primary};

  ${Link} {
    color: ${({ theme }) => theme.colors.negative};
    border-color: ${({ theme }) => theme.colors.negative};
  }
  :hover {
    background-color: ${({ theme }) => theme.grayScale[4]};
    ${Link} {
      color: ${({ theme }) => theme.grayScale[0]};
      border-color: ${({ theme }) => theme.grayScale[0]};
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    padding: 0.75rem;
    ${Link} {
      font-size: ${({ theme }) => theme.fontSizes[2]};
      line-height: ${({ theme }) => theme.lineHeights[3]};
    }
  }
`;
