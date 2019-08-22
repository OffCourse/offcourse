import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { Field } from "formik";
import { IInput, IStylable } from "../interfaces";

const RadioButton: FunctionComponent<IInput & IStylable> = ({
  className,
  checked,
  label,
  id,
  name,
  value
}) => {
  return (
    <div className={className}>
      <Field id={id} type="radio" name={name} value={value} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

const RadioButtonGroup: FunctionComponent<IInput & IStylable> = ({
  className,
  name,
  options
}) => {
  return (
    <div className={className}>
      {options.map(props => {
        const id = `${name}-${props.value}`;
        return <RadioButton key={id} name={name} {...props} />;
      })}
    </div>
  );
};

export default styled(RadioButtonGroup)``;
