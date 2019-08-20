import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { IStylable } from "../interfaces";
import InputField from "./InputField";
import Button from "./Button";

const ContactForm: FunctionComponent<IStylable> = ({ className }) => {
  return (
    <form className={className}>
      <InputField autoFocus title="what is your company or project name?" />
      <InputField title="what is your name?" />
      <InputField title="what is your email address?" />
      <InputField title="what is your phone number?" />
      <InputField title="what is your budget?">
        <div>
          <input type="radio" id="budgetSmall" name="budget" value="small" />
          <label htmlFor="budgetSmall">Less than €25,000</label>
        </div>
        <div>
          <input type="radio" id="budgetMedium" name="budget" value="medium" />
          <label htmlFor="budgetMedium">€25,000 - €75,000</label>
        </div>
        <div>
          <input type="radio" id="budgetLarge" name="budget" value="large" />
          <label htmlFor="budgetLarge">€75,000 or more</label>
        </div>
        <div>
          <input
            type="radio"
            id="budgetUnknown"
            name="budget"
            value="unknown"
          />
          <label htmlFor="budgetUnknown">To be determined</label>
        </div>
      </InputField>
      <InputField title="how did you hear about Offcourse?" />
      <Button>Work With Us</Button>
    </form>
  );
};

export default styled(ContactForm)`
  display: flex;
  flex-direction: column;
  ${InputField} {
    margin-bottom: ${({ theme }) => theme.space[6]};
  }
  ${Button} {
    margin-top: ${({ theme }) => theme.space[6]};
    margin-bottom: 0;
    align-self: flex-end;
  }
`;
