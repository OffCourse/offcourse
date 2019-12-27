import { object, string, StringSchema, ObjectSchema } from "yup";
import { IFormSchema } from "@offcourse/interfaces/src/form";

const initializeValues: (
  schema: IFormSchema
) => { [key: string]: string } = (schema) =>
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
  schema: IFormSchema
) => ObjectSchema<object> = (schema) => {
  const fields = schema.reduce((acc, { name, type }) => {
    return {
      ...acc,
      [name]: selectField[type || "text"]
    };
  }, {});
  return object().shape(fields);
};

const initialize: (
  schema: IFormSchema
) => {
  values: { [key: string]: string };
  validations: ObjectSchema<object>;
} = (schema) => {
  return {
    values: initializeValues(schema),
    validations: initializeValidations(schema)
  };
};

export { initialize };
