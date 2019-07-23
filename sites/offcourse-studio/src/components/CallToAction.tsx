import React from "react";
import { Styled, cx } from "theme-ui";
import styled from "@emotion/styled";

const CallToAction = ({ explanation, className }) => {
  return (
    <section className={className}>
      <form>
        <Styled.h3>Ring, Ring, Ring</Styled.h3>
        <Styled.p>{explanation}</Styled.p>
        <input placeholder="enter your email address" />
      </form>
    </section>
  );
};

export default styled(CallToAction)`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.grayScale[0]};
  color: ${({ theme }) => theme.grayScale[3]};
  grid-row: 2/3;

  h3 {
    color: ${({ theme }) => theme.grayScale[4]};
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    grid-row: 1/2;
    grid-column: 2/3;
  }
`;
