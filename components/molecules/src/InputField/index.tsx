/** @jsx jsx */
import { ReactNode, FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { IThemeable, IInputField } from "@offcourse/interfaces/src";
import { Field, ErrorMessage } from "formik";
import { Input, TextArea, Message, Label } from "@offcourse/atoms";
import RadioButtonGroup from "../RadioButtonGroup";
import { wrapperStyles, labelStyles } from "./styles";

type InputFieldProps = IInputField & IThemeable;

const components: { [key: string]: ReactNode } = {
  text: Input,
  email: Input,
  tel: Input,
  radio: RadioButtonGroup,
  textarea: TextArea
};

const InputField: FunctionComponent<InputFieldProps> = ({
  className,
  label,
  type = "text",
  options,
  placeholder,
  name
}) => {
  const Component = components[type || "text"];
  return (
    <Box className={className} sx={wrapperStyles}>
      <Label sx={labelStyles}>{label}</Label>
      <ErrorMessage
        render={msg => <Message isBasic={true}>{msg}</Message>}
        name={name}
      />
      <Field
        as={Component}
        options={options}
        placeholder={placeholder}
        name={name}
      />
    </Box>
  );
};

export default InputField;
