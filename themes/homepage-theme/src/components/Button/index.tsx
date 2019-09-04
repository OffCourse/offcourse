/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { IThemeable, IButton } from "@offcourse/interfaces";
import styles from "./styles";

type ButtonProps = IButton & IThemeable;

const Button: FunctionComponent<ButtonProps> = ({
  type,
  children,
  className,
  disabled
}) => {
  return (
    <button sx={styles} disabled={disabled} className={className} type={type}>
      {children}
    </button>
  );
};

export default Button;
