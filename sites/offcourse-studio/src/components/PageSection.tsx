import React from "react";
import styled from "@emotion/styled";

import LowDown from "./LowDown";
import CallToAction from "./CallToAction";
import { IPageSection } from "../interfaces";

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
  /* background-color: ${({ theme }) => theme.colors.yellow}; */

  color: ${({ theme, sectionIndex }) =>
    getSectionColors(theme.grayScale, sectionIndex).foreground};
  min-height: 70vh;
  max-height: 90vh;

  .inner {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1fr;
  }

  &:only-child {
    color: ${({ theme }) => theme.grayScale[1]};
    max-height: 100vh;
    height: 100vh;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    align-items: stretch;
    .inner {
      display: grid;
      grid-template-columns: 3fr 2fr;
      grid-template-rows: 1fr;
    }

  }
`;
