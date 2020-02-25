/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { Checkbox } from "@offcourse/atoms";
import styles from "./styles";
import { IThemeable, IInput } from "@offcourse/interfaces/src";

type RadioButtonGroupProps = IInput & IThemeable;

const RadioButtonGroup: FunctionComponent<RadioButtonGroupProps> = ({
  className,
  name,
  options = []
}) => {
  return (
    <div className={className} sx={styles}>
      {options.map(props => {
        const id = `${name}-${props.value}`;
        return <Checkbox key={id} name={name} id={id} {...props} />;
      })}
    </div>
  );
};

export default RadioButtonGroup;
