/** @jsx jsx */
import { FunctionComponent } from "react";
import { formatTitle } from "../helpers";
import { jsx } from "theme-ui";
import { labelStyles } from "./styles";
import { IThemeable, Label } from "@offcourse/interfaces/src";

type LabelProps = Label & IThemeable;

const Label: FunctionComponent<LabelProps> = ({
  className,
  children,
  htmlFor
}) => {
  return (
    <label className={className} htmlFor={htmlFor} sx={labelStyles}>
      {formatTitle(children)}
    </label>
  );
};

export default Label;
