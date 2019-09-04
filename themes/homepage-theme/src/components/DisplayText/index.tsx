/** @jsx jsx */
import { FunctionComponent } from "react";
import { Styled, jsx } from "theme-ui";
import styles from "./styles";
import { IThemeable } from "@offcourse/interfaces";

type DisplayTextProps = {
  children: string;
} & IThemeable;

const DisplayText: FunctionComponent<DisplayTextProps> = ({
  children,
  className
}) => {
  return (
    <Styled.h1 className={className} sx={styles}>
      {children}
    </Styled.h1>
  );
};

export default DisplayText;
