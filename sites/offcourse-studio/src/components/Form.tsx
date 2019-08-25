import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { IStylable } from "../interfaces";
import { Form as _Form, Field } from "formik";
import InputField from "./InputField";
import Button from "./Button";

type FormProps = {
  values: any;
  callToAction?: string;
};

const Form: FunctionComponent<FormProps & IStylable> = ({
  className,
  values,
  schema,
  onChange,
  callToAction = "submit",
  canSubmit,
  title = "Contact Us",
  ...rest
}) => {
  return (
    <_Form className={className}>
      <h1>{title}</h1>
      {schema.map((formField, index) => {
        return <Field as={InputField} key={index} {...formField} />;
      })}
      <Button disabled={!canSubmit} type="submit">
        {callToAction}
      </Button>
    </_Form>
  );
};

export default styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    user-select: none;
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
