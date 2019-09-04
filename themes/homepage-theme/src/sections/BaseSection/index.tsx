/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { IBaseSection } from "@offcourse/interfaces/src/pageSection";
import styles from "./styles";

type BaseSectionProps = IBaseSection;

const BaseSection: FunctionComponent<BaseSectionProps> = ({
  role,
  children,
  ...rest
}) => {
  console.log(rest);
  return (
    <div id={role} sx={styles}>
      {children || <pre>{JSON.stringify({ role, ...rest }, null, 2)}</pre>}
    </div>
  );
};

export default BaseSection;
