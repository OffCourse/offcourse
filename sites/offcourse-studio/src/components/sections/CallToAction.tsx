import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { IPageSection, IStylable } from "../../interfaces";
import LowDown from "../LowDown";
import ContactForm from "../ContactForm";
import Base from "./BaseSection";

const CallToAction: FunctionComponent<IPageSection & IStylable> = ({
  title,
  role,
  backdropPath = "./CellularAutomata",
  className
}) => {
  return (
    <Base role={role} className={className} backdropPath={backdropPath}>
      <LowDown size="SMALL" slogan={title} />
      <ContactForm />
    </Base>
  );
};

export default styled(CallToAction)`
  grid-template-columns: 2fr 3fr;
  grid-template-rows: 2fr 5fr;
  background-color: ${({ theme }) => theme.colors.blue};

  ${LowDown} {
    grid-column: 1 / 3;
    padding: 2rem 1rem;
  }
  ${ContactForm} {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    padding: 3rem 1rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    grid-template-columns: 2fr 3fr;
    grid-template-rows: 1fr;
    ${LowDown} {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }
    ${ContactForm} {
      grid-row: 1 / 2;
      grid-column: 2 / 3;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    ${LowDown} {
    }
  }
`;
