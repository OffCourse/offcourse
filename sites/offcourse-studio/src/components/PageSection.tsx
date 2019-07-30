import React from "react";
import styled from "@emotion/styled";

import LowDown from "./LowDown";
import CallToAction from "./CallToAction";

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
}: IPageSection) => {
  return (
    <div className={className}>
      <div className="inner">
        <LowDown slogan={slogan} />
        <CallToAction explanation={explanation} />
      </div>
    </div>
  );
};

const getSectionColors = (colorScale, index) => {
  const numberOfColors = colorScale.length;
  const scaleIndex = index % numberOfColors;
  const maxValue = numberOfColors - 1;
  const background = colorScale[scaleIndex + 1];
  const foreground = colorScale[0];
  // const foreground = scaleIndex < maxValue / 2 ? colorScale[0] : colorScale[4];
  return { background, foreground };
};

export default styled(PageSection)`
  display: grid;

  background-color: transparent;
  color: ${({ theme, sectionIndex }) =>
    getSectionColors(theme.grayScale, sectionIndex).foreground};
  padding: 3rem 2rem;
  min-height: 70vh;
  max-height: 90vh;

  .inner {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1fr;
  }

  &:only-child {
    color: ${({ theme }) => theme.grayScale[1]};
    max-height: 100vh;
    height: 100vh;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    padding: 3rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    padding: 4rem;
    align-items: center;
    .inner {
      display: grid;
      grid-template-columns: 3fr 2fr;
      grid-template-rows: 1fr;
      grid-gap: 2rem;
    }

    .inner {
      max-width: 100rem;
    }
  }
`;
