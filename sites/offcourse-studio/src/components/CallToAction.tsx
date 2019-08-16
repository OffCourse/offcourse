import React, { FunctionComponent } from "react";
import { Styled } from "theme-ui";
import styled from "@emotion/styled";
import { IPageSection, IStylable } from "../interfaces";
import Input from "./Input";

type CallToActionProps = Pick<IPageSection, "explanation" | "callToAction">;

const CallToAction: FunctionComponent<CallToActionProps & IStylable> = ({
  explanation,
  callToAction,
  className
}) => {
  return (
    <section className={className}>
      <div>
        <Styled.h1>{callToAction}</Styled.h1>
        <Styled.p>{explanation}</Styled.p>
      </div>
      <Input placeholder="enter your email address" />
    </section>
  );
};

export default styled(CallToAction)`
  display: grid;
  background-color: ${({ theme }) => theme.grayScale[0]};
  color: ${({ theme }) => theme.grayScale[4]};
  align-items: start;

  h1 {
    font-size: ${({ theme }) => theme.fontSizes[4]};
    padding: 0 1rem;
  }

  p {
    margin-top: ${({ theme }) => theme.space[4]};
    font-size: ${({ theme }) => theme.fontSizes[2]};
    padding: 0 1rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    h1 {
      font-size: ${({ theme }) => theme.fontSizes[5]};
    }
    p {
      font-size: ${({ theme }) => theme.fontSizes[3]};
    }
  }
`;
