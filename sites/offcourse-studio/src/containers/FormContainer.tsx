import React, { FunctionComponent, ReactNode } from "react";
import { Formik } from "formik";
import { object, string, StringSchema } from "yup";
import Form from "../components/Form";

const initializeValues: (schema: any[]) => { [key: string]: string } = schema =>
  schema.reduce((acc, { name }) => ({ ...acc, [name]: "" }), {});

const textField = string()
  .required()
  .min(3, "too short")
  .max(30, "too long");

const textAreaField = string().max(300, "too long");

const emailField = string()
  .required()
  .email();

const selectField: { [key: string]: StringSchema<string> } = {
  text: textField,
  radio: textField,
  tel: textField,
  email: emailField,
  textarea: textAreaField
};

const initializeValidations: (
  schema: any[]
) => { [key: string]: StringSchema<string> } = schema => {
  return schema.reduce((acc, { name, type }) => {
    return {
      ...acc,
      [name]: selectField[type || "text"]
    };
  }, {});
};

type FormContainerProps = {
  component?: ReactNode;
  form: { fields: any; title: string };
  onSubmit: () => void;
};

const FormContainer: FunctionComponent<FormContainerProps> = ({
  component: Component = Form,
  form,
  onSubmit,
  ...rest
}) => {
  const { fields: schema, title } = form;
  const initialValues = initializeValues(schema);
  const validationSchema = initializeValidations(schema);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={object().shape(validationSchema)}
      onSubmit={onSubmit}
    >
      {formProps => {
        const canSubmit = formProps.dirty && formProps.isValid;
        return (
          <Component
            {...formProps}
            canSubmit={canSubmit}
            title={title}
            fields={schema}
            {...rest}
          />
        );
      }}
    </Formik>
  );
};

export default FormContainer;
