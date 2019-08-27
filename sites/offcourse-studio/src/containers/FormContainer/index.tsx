import React, { FunctionComponent, ReactNode } from "react";
import { Formik } from "formik";
import { IForm } from "../../interfaces/form";
import { initialize } from "./helpers";

type FormContainerProps = {
  form: { fields: any; title: string };
  onSubmit: (args: any, helpers: any) => void;
  children: (formProps: IForm) => ReactNode;
};

const FormContainer: FunctionComponent<FormContainerProps> = ({
  form,
  onSubmit,
  children
}) => {
  const { fields, title } = form;
  const { values, validations } = initialize(fields);
  return (
    <Formik
      initialValues={values}
      validationSchema={validations}
      onSubmit={onSubmit}
    >
      {formProps => {
        const canSubmit = formProps.dirty && formProps.isValid;
        return children({ ...formProps, canSubmit, title, fields });
      }}
    </Formik>
  );
};

export default FormContainer;
