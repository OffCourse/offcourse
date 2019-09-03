/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { IInput } from "@offcourse/interfaces/src/form";
import { formatTitle } from "../helpers";
import { wrapperStyles, textAreaStyles } from "./styles";

const TextArea: FunctionComponent<IInput> = ({
  placeholder = "Enter Something",
  name,
  value = "",
  onChange,
  onBlur,
  rows = 4,
  autoFocus = false,
  disabled = false
}) => {
  return (
    <div sx={wrapperStyles}>
      <textarea
        sx={textAreaStyles}
        autoFocus={autoFocus}
        rows={rows}
        name={name}
        disabled={disabled}
        value={value}
        placeholder={formatTitle(placeholder)}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default TextArea;
