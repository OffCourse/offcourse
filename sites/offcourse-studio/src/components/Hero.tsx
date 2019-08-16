import React from "react";
import styled from "@emotion/styled";
import { useThemeUI } from "theme-ui";
import { useMeasure } from "../hooks";

import { IPageSection, IStylable } from "../interfaces";
import LowDown from "./LowDown";
import CallToAction from "./CallToAction";
import Logo from "./Logo";
import CellularAutomata from "./CellularAutomata";

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
  grid-template-rows: 9fr 3fr 3fr;
  background-color: ${({ theme }) => theme.colors.yellow};

  ${LowDown} {
    grid-row: 1 / 2;
    z-index: 1;
    padding: 2rem 1rem;
  }

  ${CallToAction} {
    grid-row: 2 / 3;
    z-index: 1;
    padding: 1.5rem 2rem;
  }

  ${Logo} {
    grid-row: 3 / 3;
    z-index: 1;
    margin: 2rem 1rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    grid-template-rows: 8fr 2fr 2fr;
    ${LowDown} {
      padding: 2rem;
    }

    ${Logo} {
      margin: 2rem 2rem;
      h1 {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    grid-template-rows: 1fr;
    grid-template-columns: 5fr 3fr 2fr;

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
    }
  }
`;
