import React, { FunctionComponent } from "react";
import { Form as FForm } from "formik";
import styled from "@emotion/styled";
import { IForm } from "@offcourse/interfaces/src/form";
import { IThemeable } from "@offcourse/interfaces";
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
    <FForm className={className}>
      <h1>{title}</h1>
      {schema.map((fieldProps, index) => {
        return <InputField key={index} {...fieldProps} />;
      })}
      <Button disabled={!canSubmit} type="submit">
        {callToAction}
      </Button>
    </FForm>
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
  button {
    margin-top: ${({ theme }) => theme.space[6]};
    margin-bottom: 0;
    align-self: flex-end;
  }
`;
