import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import Base from "./BaseSection";
import { IThemeable } from "../interfaces";
import { IHeroSection } from "../interfaces/pageSection";
import LowDown from "../components/LowDown";
import Logo from "../components/Logo";

type HeroProps = IHeroSection & IThemeable;

const Hero: FunctionComponent<HeroProps> = ({
  title,
  role,
  backdropPath = "./CellularAutomata",
  className
}) => {
  return (
    <Base className={className} role={role} backdropPath={backdropPath}>
      <LowDown>{title}</LowDown>
      <Logo size="SMALL" />
    </Base>
  );
};

export default styled(Hero)`
  ${LowDown} {
    padding: 1rem;
    align-items: center;
  }

  ${Logo} {
    padding: 1rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    ${LowDown} {
    }

    ${Logo} {
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 3fr 1fr;
    ${LowDown} {
      grid-column: 1/2;
    }

    ${Logo} {
      grid-column: 1/3;
      grid-row: 2/3;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    grid-template-columns: 3fr 4fr;
    ${LowDown} {
      grid-column: 1/2;
    }

    ${Logo} {
    }
  }
`;
