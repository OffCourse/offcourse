import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { IPageSection, IStylable } from "../interfaces";
import DisplayText from "../components/DisplayText";
import ContactForm from "../components/ContactForm";
import Base from "./BaseSection";

const Contact: FunctionComponent<IPageSection & IStylable> = ({
  title,
  role,
  backdropPath = "./CellularAutomata",
  className
}) => {
  return (
    <Base role={role} className={className} backdropPath={backdropPath}>
      <DisplayText>{title}</DisplayText>
      <ContactForm />
    </Base>
  );
};

export default styled(Contact)`
  grid-template-rows: auto 1fr;
  background-color: ${({ theme }) => theme.grayScale[0]};

  ${DisplayText} {
    background-color: ${({ theme }) => theme.grayScale[1]};
    padding: 2rem;
  }
  ${ContactForm} {
    padding: 2rem 1rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    grid-template-columns: 2fr 3fr;
    grid-template-rows: 1fr;

    ${DisplayText} {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }
    ${ContactForm} {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      padding: 2rem 3rem;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    grid-template-rows: 1fr;
    ${DisplayText} {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }
    ${ContactForm} {
      grid-row: 1 / 2;
      padding: 2rem 4rem;
    }
  }
`;
