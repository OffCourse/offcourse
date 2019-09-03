/** @jsx jsx */
import { FunctionComponent, ChangeEvent } from "react";
import { jsx } from "theme-ui";
import { IInput } from "@offcourse/interfaces/src/form";
import { formatTitle, lowerCase, formatValue } from "../helpers";
import { wrapperStyles, inputStyles } from "./styles";

const Input: FunctionComponent<IInput> = ({
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
  const handleChange: (event: ChangeEvent<HTMLInputElement>) => void = e => {
    if (!onChange) {
      return;
    }
    if (!isNormalized) {
      return onChange(e);
    }

    const value = lowerCase(e.target.value);
    e.target.value = value;
    return onChange(e);
  };

  const baseProps = {
    name: name,
    type: type,
    autoComplete: `${autoComplete}`,
    autoFocus: autoFocus,
    disabled,
    value: formatValue(value, isNormalized),
    placeholder: placeholder
      ? formatTitle(placeholder)
      : formatTitle(`enter your ${name}`),
    onChange: handleChange,
    required,
    onBlur: onBlur
  };
  return (
    <div sx={wrapperStyles}>
      <input sx={inputStyles} {...baseProps} />
    </div>
  );
};

export default Input;
