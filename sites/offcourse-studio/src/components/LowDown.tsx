import React from "react";
import { Size } from "@offcourse/enums";
import styled from "@emotion/styled";
import { Styled } from "theme-ui";

const LowDown = ({ slogan, className }) => {
  const words = slogan.split(" ");
  const isOneToken = words.length === 1;
  return (
    <section className={className}>
      {words.map(word => (
        <div className="word-wrapper">
          <Styled.h1
            className={isOneToken && "isOneToken"}
            size={Size.EXTRA_LARGE}
          >
            {word}
          </Styled.h1>
        </div>
      ))}
    </section>
  );
};

export default styled(LowDown)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-row: 1/2;
  .word-wrapper {
  }

  h1 {
    padding: 0rem 0.5rem;
    font-size: 2rem;
    margin-bottom: 0.5rem;
    display: inline-block;
    background-color: ${({ theme }) => theme.grayScale[4]};

    &.isOneToken {
      width: 2.5rem;
      text-align: center;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    h1 {
      font-size: 3rem;
      margin-bottom: 0.75rem;
      padding: 0rem 0.75rem;

      &.isOneToken {
        width: 3.75rem;
      }
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    h1 {
      font-size: 4rem;
      margin-bottom: 1rem;
      padding: 0rem 1rem;

      &.isOneToken {
        width: 5rem;
      }
    }
  }
`;
