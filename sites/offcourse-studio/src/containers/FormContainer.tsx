import React, { useState, FunctionComponent } from "react";
import { Formik } from "formik";

const FormContainer: FunctionComponent<> = ({
  component: Component,
  form,
  onSubmit,
  ...rest
}) => {
  const [values, setValues] = useState({});
  const initialValues = form.reduce(
    (acc, { name, value }) => ({ ...acc, [name]: value }),
    {}
  );
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {formProps => {
        return <Component {...formProps} formFields={form} {...rest} />;
      }}
    </Formik>
  );
};

export default FormContainer;
