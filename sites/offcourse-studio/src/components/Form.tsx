import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { Styled } from "theme-ui";
import { IInput, IStylable } from "../interfaces";
import { Form, Field, FieldArray } from "formik";
import InputField from "./InputField";
import Button from "./Button";

type ContactFormProps = {
  values: any;
  callToAction: string;
};

const ContactForm: FunctionComponent<ContactFormProps & IStylable> = ({
  className,
  values,
  formFields,
  onChange,
  callToAction = "submit"
}) => {
  return (
    <Form className={className}>
      <h1>Tell Us More About You</h1>
      {formFields.map((formField, index) => {
        return <Field component={InputField} key={index} {...formField} />;
      })}
      <Button type="submit">{callToAction}</Button>
    </Form>
  );
};

export default styled(ContactForm)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-family: ${({ theme }) => theme.fonts.heading};
    margin: 1rem;
  }
  ${InputField} {
    margin-bottom: ${({ theme }) => theme.space[6]};
  }
  ${Button} {
    margin-top: ${({ theme }) => theme.space[6]};
    margin-bottom: 0;
    align-self: flex-end;
  }
`;
