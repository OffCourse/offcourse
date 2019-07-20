import React from "react";
import { Size } from "@offcourse/enums";
import { Styled, cx } from "theme-ui";
import styled from "@emotion/styled";

interface IPageSection {
  className?: string;
  sectionIndex: number;
  slogan: string;
  explanation: string;
  role: string;
}

const PageSection = ({
  style,
  slogan,
  explanation,
  className
}: IPageSection) => (
  <div className={className}>
    <div className="inner">
      <div>
        <Styled.h1 size={Size.EXTRA_LARGE}>{slogan}</Styled.h1>
        <Styled.h2>{explanation}</Styled.h2>
      </div>
      <form>
        <input placeholder="enter your email address" />
      </form>
    </div>
  </div>
);

const getSectionColors = (colorScale, index) => {
  const numberOfColors = colorScale.length;
  const scaleIndex = index % numberOfColors;
  const maxValue = numberOfColors - 1;
  const background = colorScale[maxValue - scaleIndex];
  const foreground = scaleIndex <= maxValue / 2 ? colorScale[0] : colorScale[4];
  return { background, foreground };
};

export default styled(PageSection)`
  display: grid;
  background-color: ${({ theme, sectionIndex }) =>
    getSectionColors(theme.grayScale, sectionIndex).background};
  color: ${({ theme, sectionIndex }) =>
    getSectionColors(theme.grayScale, sectionIndex).foreground};
  padding: 2rem;
  min-height: 40vh;
  justify-content: center;
  align-items: center;

  .inner {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    .inner {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    .inner {
      max-width: 100rem;
    }
  }
`;
