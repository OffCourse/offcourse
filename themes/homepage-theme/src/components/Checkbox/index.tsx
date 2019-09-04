/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { Field } from "formik";
import { IThemeable } from "@offcourse/interfaces";
import { IInput } from "@offcourse/interfaces/src/form";
import { checkboxStyles, wrapperStyles, labelStyles } from "./styles";

type CheckboxProps = IInput & IThemeable;

const Checkbox: FunctionComponent<CheckboxProps> = ({
  label,
  className,
  id,
  name,
  value
}) => {
  return (
    <div sx={wrapperStyles}>
      <Field
        sx={checkboxStyles}
        className={className}
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
