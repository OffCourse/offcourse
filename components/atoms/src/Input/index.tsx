/** @jsx jsx */
import { FunctionComponent, ChangeEvent } from "react";
import { jsx } from "theme-ui";
import { IThemeable } from "@offcourse/interfaces/src";
import { IInput } from "@offcourse/interfaces/src/form";
import { formatTitle, lowerCase, formatValue } from "../helpers";
import { wrapperStyles, inputStyles } from "./styles";

type InputProps = IInput & IThemeable;

const Input: FunctionComponent<InputProps> = ({
  className,
  placeholder,
  name,
  value = "",
  onChange,
  onBlur,
  type = "text",
  autoComplete = false,
  autoFocus = false,
  disabled = false,
  required = false,
  isNormalized = true
}) => {
  const handleChange: (event: ChangeEvent<HTMLInputElement>) => void = (e) => {
    if (!onChange) {
      return;
    }
    if (!isNormalized) {
      return onChange(e);
    }

    const fieldValue = lowerCase(e.target.value);
    e.target.value = fieldValue;
    return onChange(e);
  };

  const baseProps = {
    name,
    type,
    autoComplete: `${autoComplete}`,
    autoFocus,
    disabled,
    value: formatValue(value, isNormalized),
    placeholder: placeholder
      ? formatTitle(placeholder)
      : formatTitle(`enter your ${name}`),
    onChange: handleChange,
    required,
    onBlur
  };
  return (
    <div className={className} sx={wrapperStyles}>
      <input sx={inputStyles} {...baseProps} />
    </div>
  );
};

export default Input;
