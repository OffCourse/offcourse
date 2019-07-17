import React from "react";
import { Size } from "@offcourse/enums";
import { Styled, cx } from "theme-ui";
import styled from "@emotion/styled";

interface IPageSection {
  className?: string;
  slogan: string;
  explanation: string;
  role: string;
}

const Column = styled(({ className, children }) => {
  return <div className={className}>{children}</div>;
})`
  padding: ${({ theme }) => theme.space[8]};
`;

const PageSection = ({ slogan, explanation, className }: IPageSection) => (
  <div className={className}>
    <Column>
      <Styled.h1 size={Size.EXTRA_LARGE}>Offcourse</Styled.h1>
      <Styled.h1 size={Size.EXTRA_LARGE}>Studio_</Styled.h1>
    </Column>
    <Column>
      <Styled.h1 size={Size.EXTRA_LARGE}>www.offcourse-studio.com</Styled.h1>
      <Styled.h1 size={Size.EXTRA_LARGE}>==> {slogan}</Styled.h1>
      <Styled.p>{explanation}</Styled.p>
      <button>Call us</button>
    </Column>
  </div>
);

export default styled(PageSection)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.grayScale[0]};
  color: ${({ theme }) => theme.grayScale[2]};
  &:nth-of-type(odd) {
    background-color: ${({ theme }) => theme.grayScale[3]};
    color: ${({ theme }) => theme.grayScale[0]};
  }
`;
