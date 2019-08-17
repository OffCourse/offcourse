import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { useThemeUI } from "theme-ui";
import { useMeasure } from "../../hooks";

import Base from "./BaseSection";
import { IPageSection, IStylable } from "../../interfaces";
import LowDown from "../LowDown";
import Logo from "../Logo";

type HeroProps = Pick<IPageSection, "title">;

const Hero: FunctionComponent<HeroProps & IStylable> = ({
  title,
  backdropPath = "./CellularAutomata",
  className
}) => {
  return (
    <Base className={className} backdropPath={backdropPath}>
      <LowDown slogan={title} />
      <Logo />
    </Base>
  );
};

export default styled(Hero)`
  grid-template-rows: 3fr 1fr;
  grid-template-columns: 2fr 1fr;
  background-color: ${({ theme }) => theme.colors.yellow};

  ${LowDown} {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    z-index: 1;
    padding: 4rem 1rem;
  }

  ${Logo} {
    grid-row: 3 / 3;
    grid-column: 1 / 3;
    z-index: 1;
    margin: 1rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    grid-template-columns: 2fr 3fr;

    ${LowDown} {
      padding: 4rem 2rem;
      justify-content: center;
    }

    ${Logo} {
      margin: 1.5rem 2rem;
      h1 {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    ${LowDown} {
      grid-row: 1/2;
      grid-column: 1/2;
      padding: 2rem;
    }

    ${Logo} {
      grid-row: 2/2;
      grid-column: 3/4;
    }
  }
`;
