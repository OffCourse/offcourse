import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { IInput, IStylable } from "../interfaces";

const RadioButton: FunctionComponent<IInput & IStylable> = ({
  className,
  checked,
  label,
  name,
  value
}) => {
  const id = `${name}-${value}`;
  return (
    <div className={className}>
      <input
        defaultChecked={checked}
        type="radio"
        id={id}
        name={name}
        value={value}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default styled(RadioButton)``;
