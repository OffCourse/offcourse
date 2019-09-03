/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import styles from "./styles";

type DisplayTextProps = {
  children: string;
};

const DisplayText: FunctionComponent<DisplayTextProps> = ({ children }) => {
  return <h1 sx={styles}>{children}</h1>;
};

export default DisplayText;
