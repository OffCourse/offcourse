/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { Form as FForm } from "formik";
import { IForm } from "@offcourse/interfaces/src/form";
import InputField from "../InputField";
import Button from "../Button";
import { wrapperStyles, titleStyles, buttonStyles } from "./styles";

type FormProps = IForm;

const Form: FunctionComponent<FormProps> = ({
  fields: schema,
  callToAction = "submit",
  canSubmit,
  title = "Contact Us"
}) => {
  return (
    <FForm sx={wrapperStyles}>
      <h1 sx={titleStyles}>{title}</h1>
      {schema.map((fieldProps, index) => {
        return <InputField key={index} {...fieldProps} />;
      })}
      <Button sx={buttonStyles} disabled={!canSubmit} type="submit">
        {callToAction}
      </Button>
    </FForm>
  );
};

export default Form;
