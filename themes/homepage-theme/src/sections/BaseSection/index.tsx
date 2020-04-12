/** @jsx jsx */
import { FunctionComponent, forwardRef } from "react";
import { jsx, Box } from "theme-ui";
import { IThemeable } from "@offcourse/interfaces/src";
import { IBaseSection } from "@offcourse/interfaces/src/pageSection";
import { wrapperStyles } from "./styles";

type BaseSectionProps = IBaseSection & {} & IThemeable;

const BaseSection: FunctionComponent<BaseSectionProps> = (
  { role, className, children, ...rest },
  ref: any
) => {
  return (
    <Box
      as={"section"}
      ref={ref}
      id={role}
      className={className}
      sx={wrapperStyles}
    >
      {children || <pre>{JSON.stringify({ role, ...rest }, null, 2)}</pre>}
    </Box>
  );
};

export default forwardRef(BaseSection);
