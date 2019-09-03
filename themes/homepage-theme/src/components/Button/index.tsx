/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { IButton } from "@offcourse/interfaces";
import styles from "./styles";

type ButtonProps = IButton;

const Button: FunctionComponent<ButtonProps> = ({
  type,
  children,
  disabled
}) => {
  return (
    <button sx={styles} disabled={disabled} type={type}>
      {children}
    </button>
  );
};

export default Button;
