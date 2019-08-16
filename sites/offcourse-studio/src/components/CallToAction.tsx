import React, { FunctionComponent } from "react";
import { Styled } from "theme-ui";
import styled from "@emotion/styled";
import { IPageSection, IStylable } from "../interfaces";

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
        <input placeholder="enter your email address" />
      </div>
    </section>
  );
};

export default styled(CallToAction)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.grayScale[0]};
  color: ${({ theme }) => theme.grayScale[4]};

  h1 {
    font-size: ${({ theme }) => theme.fontSizes[4]};
  }

  p {
    margin-top: ${({ theme }) => theme.space[4]};
    font-size: ${({ theme }) => theme.fontSizes[2]};
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    h1 {
      font-size: ${({ theme }) => theme.fontSizes[5]};
    }
    p {
      font-size: ${({ theme }) => theme.fontSizes[3]};
    }
  }
`;
