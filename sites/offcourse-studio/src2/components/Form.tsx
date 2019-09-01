import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { IThemeable } from "../interfaces";
import { IForm } from "../interfaces/form";
import { Form as _Form } from "formik";
import InputField from "./InputField";
import Button from "./Button";

type FormProps = IForm & IThemeable;

const Form: FunctionComponent<FormProps> = ({
  className,
  fields: schema,
  callToAction = "submit",
  canSubmit,
  title = "Contact Us"
}) => {
  return (
    <_Form className={className}>
      <h1>{title}</h1>
      {schema.map((fieldProps, index) => {
        return <InputField key={index} {...fieldProps} />;
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
