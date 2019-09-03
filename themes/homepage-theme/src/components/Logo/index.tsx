/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { Styled } from "theme-ui";
import styles from "./styles";

const Logo: FunctionComponent<{ children: string }> = ({ children }) => {
  return <Styled.h3 sx={styles}>{children}</Styled.h3>;
};

export default Logo;
