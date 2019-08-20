import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { IStylable } from "../interfaces";
import { Styled } from "theme-ui";
import InputField from "./InputField";

const ContactForm: FunctionComponent<IStylable> = ({ className }) => {
  return (
    <div className={className}>
      <InputField title="what is your company or project name?" />
      <InputField title="what is your name?" />
      <InputField title="what is your email address?" />
      <InputField title="what is your phone number?" />
      <InputField title="what is your budget?" />
      <ul>
        <li>Less than €25,000</li>
        <li>€25,000 - €75,000</li>
        <li>€75,000 or more</li>
        <li>To be determined</li>
      </ul>

      <InputField title="how did you hear about Offcourse?" />
    </div>
  );
};

export default styled(ContactForm)`
  ${InputField} {
    margin-bottom: ${({ theme }) => theme.space[6]};
  }
`;
