/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { Field } from "formik";
import { IThemeable, IInput } from "@offcourse/interfaces/src";
import { checkboxStyles, wrapperStyles, labelStyles } from "./styles";
import Label from "../Label";

type CheckboxProps = IInput & IThemeable;

const Checkbox: FunctionComponent<CheckboxProps> = ({
  label,
  className,
  id,
  name,
  value
}) => {
  return (
    <Box sx={wrapperStyles}>
      <Field
        sx={checkboxStyles}
        className={className}
        id={id}
        type="radio"
        name={name}
        value={value}
      />
      <Label sx={labelStyles} htmlFor={id}>
        {label}
      </Label>
    </Box>
  );
};
export default Checkbox;
