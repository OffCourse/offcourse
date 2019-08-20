import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import Base from "./BaseSection";
import { IPageSection, IStylable } from "../../interfaces";
import LowDown from "../LowDown";
import Logo from "../Logo";

type HeroProps = Pick<IPageSection, "title" | "role">;

const Hero: FunctionComponent<HeroProps & IStylable> = ({
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

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    grid-template-columns: 1fr 2fr;
    ${LowDown} {
      grid-column: 1/2;
    }

    ${Logo} {
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
