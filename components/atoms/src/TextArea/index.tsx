/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { IInput } from "@offcourse/interfaces/src/form";
import { IThemeable } from "@offcourse/interfaces/src";
import { formatTitle } from "../helpers";
import { wrapperStyles, textAreaStyles } from "./styles";

type TextAreaProps = IInput & IThemeable;

const TextArea: FunctionComponent<TextAreaProps> = ({
  className,
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
        className={className}
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
