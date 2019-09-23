/** @jsx jsx */
import { FunctionComponent, forwardRef } from "react";
import { jsx } from "theme-ui";
import { IThemeable } from "@offcourse/interfaces";
import { IBaseSection } from "@offcourse/interfaces/src/pageSection";
import styles from "./styles";

type BaseSectionProps = IBaseSection & IThemeable;

const BaseSection: FunctionComponent<BaseSectionProps> = (
  { role, className, children, ...rest },
  ref: any
) => {
  return (
    <div ref={ref} id={role} className={className} sx={styles}>
      {children || <pre>{JSON.stringify({ role, ...rest }, null, 2)}</pre>}
    </div>
  );
};

export default forwardRef(BaseSection);
