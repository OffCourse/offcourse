import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { Styled, Footer } from "theme-ui";
import Logo from "../components/Logo";
import { IThemeable } from "@offcourse/interfaces";
import { useGetAllSections } from "../hooks";
import { IFooterSection } from "@offcourse/interfaces/src/pageSection";

type FooterProps = IFooterSection & IThemeable;

const FooterSection: FunctionComponent<FooterProps> = ({
  className,
  contactInfo
}) => {
  const { street, zipCode, country, city, email } = contactInfo;
  const { siteName } = useGetAllSections();
  return (
    <Footer className={className}>
      <div className="contact">
        <section>
          <Styled.h2>Contact</Styled.h2>
          <p>{street}</p>
          <p>{`${zipCode} ${city}`}</p>
          <p>{country}</p>
          <p>{email}</p>
        </section>
      </div>
      <Logo>{siteName}</Logo>
    </Footer>
  );
};

export default styled(FooterSection)`
  display: grid;
  padding: 2rem 1rem 1rem 2rem;
  grid-gap: 1rem;
  min-height: 20vh;
  max-height: 35vh;
  .contact {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  section {
    line-height: 0.3rem;
  }

  /* ${Logo} { */
    /* h1 { */
      /* font-size: 1.5rem; */
      /* padding: 0rem 0.3rem; */
      /* margin: 0 0.3rem 0.3rem 0; */
    /* } */
  /* } */
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    grid-template-columns: 1fr 1fr;
    /* ${Logo} { */
      /* h1 { */
        /* font-size: 2rem; */
        /* padding: 0rem 0.4rem; */
        /* margin: 0 0.4rem 0.4rem 0; */
      /* } */
    /* } */
  }
`;
