import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { IStylable } from "../interfaces";

const Link: FunctionComponent<IStylable> = ({ className, href, children }) => {
  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
};

export default styled(Link)`
  border: none;
  background-color: transparent;
  text-align: inherit;
  padding: 0;
  user-select: none;
  color: black;
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  line-height: ${({ theme }) => theme.lineHeights[2]};
  border-bottom: 0.125rem solid black;
  text-decoration: inherit;
  :focus {
    outline: none;
  }
  :hover {
    color: ${({ theme }) => theme.colors.blue};
    border-color: ${({ theme }) => theme.colors.blue};
  }
`;
