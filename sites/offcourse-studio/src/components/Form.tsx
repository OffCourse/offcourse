import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { IInput, IStylable } from "../interfaces";
import { Form, Field, FieldArray } from "formik";
import InputField from "./InputField";
import Button from "./Button";
import RadioButton from "./RadioButton";

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
  ${InputField} {
    margin-bottom: ${({ theme }) => theme.space[6]};
  }
  ${Button} {
    margin-top: ${({ theme }) => theme.space[6]};
    margin-bottom: 0;
    align-self: flex-end;
  }
`;
