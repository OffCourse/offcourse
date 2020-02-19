/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { Form as FForm } from "formik";
import { IForm } from "@offcourse/interfaces/src/form";
import { IThemeable } from "@offcourse/interfaces/src";
import { InputField } from "@offcourse/molecules";
import { Button } from "@offcourse/atoms";
import { wrapperStyles, buttonStyles } from "./styles";

type FormProps = IForm & IThemeable;

const Form: FunctionComponent<FormProps> = ({
  fields: schema,
  className,
  callToAction = "submit",
  canSubmit
}) => {
  return (
    <FForm className={className} sx={wrapperStyles}>
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
