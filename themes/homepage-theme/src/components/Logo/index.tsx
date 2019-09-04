/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import DisplayText from "../../components/DisplayText";
import { IThemeable } from "@offcourse/interfaces";
import styles from "./styles";

type LogoProps = { children: string } & IThemeable;

const Logo: FunctionComponent<LogoProps> = ({ children, className }) => {
  return (
    <DisplayText className={className} sx={styles}>
      {children}
    </DisplayText>
  );
};

export default Logo;
