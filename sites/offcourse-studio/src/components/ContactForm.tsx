import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { IStylable } from "../interfaces";
import { Styled } from "theme-ui";
import Input from "./Input";

const ContactForm: FunctionComponent<IStylable> = ({ className }) => {
  return (
    <div className={className}>
      <Input placeholder="what is your company or project name?" />
      <Input placeholder="what is your name?" />
      <Input placeholder="what is your email address?" />
      <Input placeholder="what is your phone number?" />
      <Input placeholder="what is your budget?" />
      <ul>
        <li>Less than €25,000</li>
        <li>€25,000 - €75,000</li>
        <li>€75,000 or more</li>
        <li>To be determined</li>
      </ul>

      <Input placeholder="how did you hear about Offcourse?" />
    </div>
  );
};

export default styled(ContactForm)`
  ${Input} {
    margin-bottom: ${({ theme }) => theme.space[6]};
  }
`;
