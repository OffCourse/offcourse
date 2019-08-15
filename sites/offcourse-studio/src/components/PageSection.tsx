import React from "react";
import CellularAutomata from "./CellularAutomata";
import styled from "@emotion/styled";
import { useThemeUI } from "theme-ui";
import { useMeasure } from "../hooks";
import LowDown from "./LowDown";
import CallToAction from "./CallToAction";
import Logo from "./Logo";
import { IPageSection, IStylable } from "../interfaces";

const PageSection = ({
  slogan,
  explanation,
  callToAction,
  className
}: IPageSection & IStylable) => {
  const context = useThemeUI();
  const { blue: background, yellow: foreground } = context.theme.colors;
  const [{ width, height }, bind] = useMeasure();
  return (
    <div {...bind} className={className}>
      <CellularAutomata
        foreground={foreground}
        background={background}
        width={width}
        height={height}
      />
      <LowDown slogan={slogan} />
      <CallToAction callToAction={callToAction} explanation={explanation} />
      <Logo />
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
  grid-template-rows: 6fr 2fr 1fr;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme, sectionIndex }) =>
    getSectionColors(theme.grayScale, sectionIndex).foreground};
  min-height: 70vh;
  max-height: 90vh;

  ${LowDown} {
    grid-row: 1 / 2;
    z-index: 1;
  }

  ${CallToAction} {
    grid-row: 2 / 3;
    z-index: 1;
  }

  .logo {
    grid-row: 3 / 3;
    z-index: 1;
  }

  &:only-child {
    max-height: 100vh;
    height: 100vh;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
  }
`;
