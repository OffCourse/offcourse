import React from "react";
import CellularAutomata from "./CellularAutomata";
import styled from "@emotion/styled";
import { useThemeUI } from "theme-ui";
import { useMeasure } from "../hooks";
import LowDown from "./LowDown";
import CallToAction from "./CallToAction";
import Logo from "./Logo";
import { IPageSection, IStylable } from "../interfaces";

const Hero = ({
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

export default styled(Hero)`
  display: grid;
  grid-template-rows: 6fr 3fr 1fr;
  background-color: ${({ theme }) => theme.colors.yellow};

  ${LowDown} {
    grid-row: 1 / 2;
    z-index: 1;
    padding: 2rem 1rem;
  }

  ${CallToAction} {
    grid-row: 2 / 3;
    z-index: 1;
    padding: 2rem;
  }

  ${Logo} {
    grid-row: 3 / 3;
    z-index: 1;
    padding: 2rem 1rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    ${LowDown} {
      padding: 2rem;
    }

    ${CallToAction} {
    }

    ${Logo} {
      padding: 2rem;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    grid-template-rows: 1fr;
    grid-template-columns: 3fr 2fr 30rem;

    ${LowDown} {
      grid-row: 1/2;
      grid-column: 1/2;
      padding: 2rem;
    }

    ${CallToAction} {
      grid-row: 1/2;
      grid-column: 2/3;
    }

    ${Logo} {
      grid-row: 1/2;
      grid-column: 3/4;
      justify-content: flex-end;
      padding: 2rem;
    }
  }
`;
