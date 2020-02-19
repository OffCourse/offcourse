/** @jsx jsx */
import { FunctionComponent, forwardRef } from "react";
import { jsx, Box } from "theme-ui";
import { IThemeable } from "@offcourse/interfaces/src";
import { IBaseSection } from "@offcourse/interfaces/src/pageSection";
import { wrapperStyles, innerWrapperStyles } from "./styles";

type BaseSectionProps = IBaseSection & {
  useInnerWrapper?: boolean;
} & IThemeable;

const BaseSection: FunctionComponent<BaseSectionProps> = (
  { role, className, children, useInnerWrapper = true, ...rest },
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
      {useInnerWrapper ? (
        <Box sx={innerWrapperStyles}>
          {children || <pre>{JSON.stringify({ role, ...rest }, null, 2)}</pre>}
        </Box>
      ) : (
        children || <pre>{JSON.stringify({ role, ...rest }, null, 2)}</pre>
      )}
    </Box>
  );
};

export default forwardRef(BaseSection);
