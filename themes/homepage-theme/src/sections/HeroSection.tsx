import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import Base from "./BaseSection";
import { IThemeable } from "@offcourse/interfaces";
import { IHeroSection } from "@offcourse/interfaces/src/pageSection";
import LowDown from "../components/LowDown";
import Logo from "../components/Logo";

type HeroProps = IHeroSection & IThemeable;

const Hero: FunctionComponent<HeroProps> = ({ title, ...props }) => {
  return (
    <Base {...props}>
      <LowDown>{title}</LowDown>
      <Logo />
    </Base>
  );
};

export default styled(Hero)`
  padding: 0 1rem;
  min-height: 70vh;
  ${LowDown} {
    align-items: center;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    grid-template-columns: 4fr 2fr;
    grid-template-rows: 3fr 1fr;
    ${LowDown} {
      grid-column: 1/2;
    }
    ${Logo} {
      grid-column: 2/3;
      grid-row: 2/3;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    grid-template-columns: 3fr 4fr;
    ${LowDown} {
      grid-column: 1/2;
    }
  }
`;
