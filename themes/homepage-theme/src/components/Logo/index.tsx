/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { Styled } from "theme-ui";
import styles from "./styles";
import { IThemeable } from "@offcourse/interfaces";

type LogoProps = { children: string } & IThemeable;

const Logo: FunctionComponent<LogoProps> = ({ children, className }) => {
  return (
    <Styled.h3 className={className} sx={styles}>
      {children}
    </Styled.h3>
  );
};

export default Logo;
