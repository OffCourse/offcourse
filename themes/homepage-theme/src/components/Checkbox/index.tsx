/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { Field } from "formik";
import { IInput } from "@offcourse/interfaces/src/form";
import { checkboxStyles, wrapperStyles, labelStyles } from "./styles";

const Checkbox: FunctionComponent<IInput & { id: string }> = ({
  label,
  id,
  name,
  value
}) => {
  return (
    <div sx={wrapperStyles}>
      <Field
        sx={checkboxStyles}
        id={id}
        type="radio"
        name={name}
        value={value}
      />
      <label sx={labelStyles} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};
export default Checkbox;
