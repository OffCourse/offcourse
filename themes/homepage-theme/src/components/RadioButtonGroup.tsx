import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { IThemeable } from "@offcourse/interfaces";
import { IInput } from "@offcourse/interfaces/src/form";
import Checkbox from "./Checkbox";

const RadioButtonGroup: FunctionComponent<IInput & IThemeable> = ({
  className,
  name,
  options = []
}) => {
  return (
    <div className={className}>
      {options.map(props => {
        const id = `${name}-${props.value}`;
        return <Checkbox key={id} name={name} id={id} {...props} />;
      })}
    </div>
  );
};

export default styled(RadioButtonGroup)`
  display: grid;
  grid-gap: 0.5rem;
  padding: ${({ theme }) => theme.space[4]} 0;
`;
