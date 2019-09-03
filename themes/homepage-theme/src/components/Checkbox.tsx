import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { Field } from "formik";
import { IThemeable } from "../interfaces";
import { IInput } from "../interfaces/form";

const StyledField = styled(Field)``;

const Checkbox: FunctionComponent<IInput & IThemeable> = ({
  className,
  label,
  id,
  name,
  value
}) => {
  return (
    <div className={className}>
      <StyledField id={id} type="radio" name={name} value={value} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
export default styled(Checkbox)`
  display: grid;
  grid-gap: 0.75rem;
  grid-template-columns: 1.5rem 1fr;
  align-items: center;

  ${StyledField} {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: ${({ theme }) => theme.grayScale[1]};
    margin: 0;
    height: 1.5rem;
    width: 1.5rem;
    cursor: pointer;
    outline: none;
    :checked {
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
  label {
    padding: 0;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
  }
`;
