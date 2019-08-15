import React, { FunctionComponent } from "react";
import { Styled, cx } from "theme-ui";
import styled from "@emotion/styled";
import { IPageSection, IStylable } from "../interfaces";
import DisplayText from "./DisplayText";

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
  padding: 2rem 1rem;
  background-color: ${({ theme }) => theme.grayScale[0]};
  color: ${({ theme }) => theme.grayScale[4]};

  h1 {
    font-size: 2rem;
  }
`;
