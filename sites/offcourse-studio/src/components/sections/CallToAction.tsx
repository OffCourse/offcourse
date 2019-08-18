import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { IPageSection, IStylable } from "../../interfaces";
import LowDown from "../LowDown";
import Base from "./BaseSection";

const CallToAction: FunctionComponent<IPageSection & IStylable> = ({
  title,
  role,
  backdropPath = "./CellularAutomata",
  className
}) => {
  return (
    <Base role={role} className={className} backdropPath={backdropPath}>
      <LowDown slogan={title} />
    </Base>
  );
};

export default styled(CallToAction)`
  grid-template-columns: 1fr 1fr;
  ${LowDown} {
    z-index: 1;
    padding: 3rem 1rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    ${LowDown} {
      padding: 3rem 2rem;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    ${LowDown} {
    }
  }
`;
