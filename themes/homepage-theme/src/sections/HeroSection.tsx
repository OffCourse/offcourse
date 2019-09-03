import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import Base from "./BaseSection";
import { IHeroSection } from "@offcourse/interfaces/src/pageSection";
import DisplayText from "../components/DisplayText";
import Logo from "../components/Logo";
import { useGetAllSections } from "../hooks";

type HeroProps = IHeroSection;

const Hero: FunctionComponent<HeroProps> = ({ title, ...props }) => {
  const { siteName } = useGetAllSections();
  return (
    <Base {...props}>
      <DisplayText>{title}</DisplayText>
      <Logo>{siteName}</Logo>
    </Base>
  );
};

export default styled(Hero)`
  padding: 0 1rem;
  min-height: 70vh;
  /* ${DisplayText} { */
    /* align-items: center; */
  /* } */

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    grid-template-columns: 4fr 2fr;
    grid-template-rows: 3fr 1fr;
    /* ${DisplayText} { */
      /* grid-column: 1/2; */
    /* } */
    /* ${Logo} { */
      /* grid-column: 2/3; */
      /* grid-row: 2/3; */
    /* } */
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    grid-template-columns: 3fr 4fr;
    /* ${DisplayText} { */
      /* grid-column: 1/2; */
    /* } */
  }
`;
