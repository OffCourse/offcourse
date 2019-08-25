import React, { FunctionComponent } from "react";
import { Formik } from "formik";
import { object, string, mix } from "yup";

const initializeValues = schema =>
  schema.reduce((acc, { name, value }) => ({ ...acc, [name]: "" }), {});

const textField = string()
  .required()
  .min(3, "too short")
  .max(30, "too long");

const textAreaField = string().max(300, "too long");

const emailField = string()
  .required()
  .email();

const selectField = {
  text: textField,
  radio: textField,
  tel: textField,
  email: emailField,
  textarea: textAreaField
};

const initializeValidations = schema => {
  const fields = schema.reduce((acc, { name, type, value }) => {
    return {
      ...acc,
      [name]: selectField[type || "text"]
    };
  }, {});
  return object().shape(fields);
};

const FormContainer: FunctionComponent<> = ({
  component: Component,
  schema,
  onSubmit,

  ...rest
}) => {
  const initialValues = initializeValues(schema);
  const validationSchema = initializeValidations(schema);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formProps => {
        const canSubmit = formProps.dirty && formProps.isValid;
        return (
          <Component
            {...formProps}
            canSubmit={canSubmit}
            schema={schema}
            {...rest}
          />
        );
      }}
    </Formik>
  );
};

export default FormContainer;
