import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { Styled, Footer as ThemedFooter } from "theme-ui";
import Logo from "./Logo";
import { IStylable } from "../interfaces";

const Footer: FunctionComponent<IStylable> = ({ className }) => {
  return (
    <ThemedFooter className={className}>
      <div className="contact">
        <section>
          <Styled.h2>Contact</Styled.h2>
          <p>Schiemond 20-22</p>
          <p>3024EE Rotterdam</p>
          <p>contact@offcourse.io</p>
        </section>
      </div>
      <Logo />
    </ThemedFooter>
  );
};

export default styled(Footer)`
  display: grid;
  padding: 2rem 1rem 1rem 1rem;
  grid-gap: 1rem;
  min-height: 20vh;
  .contact {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  section {
    line-height: 0.3rem;
  }
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    grid-template-columns: 1fr 1fr;
  }
`;
