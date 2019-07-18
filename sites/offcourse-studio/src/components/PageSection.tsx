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

const PageSection = ({ slogan, explanation, className }: IPageSection) => {
  console.log(slogan);
  return (
    <div className={className}>
      <Styled.h1 size={Size.EXTRA_LARGE}>{slogan}</Styled.h1>
      <Styled.p>{explanation}</Styled.p>
      <button>Call us</button>
    </div>
  );
};

export default styled(PageSection)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
