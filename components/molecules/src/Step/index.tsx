/** @jsx jsx */
import { FunctionComponent, forwardRef } from "react";
import { jsx, Box } from "theme-ui";
import { IThemeable, IStep } from "@offcourse/interfaces/src";
import { wrapperStyles, titleStyles, numberStyles } from "./styles";
import { Text, Heading } from "@offcourse/atoms";

type StepProps = IStep & IThemeable;

const Step: FunctionComponent<StepProps> = (
  { as, style, children, title, description, className, index },
  ref: any
) => {
  return (
    <Box
      ref={ref}
      as={as}
      sx={wrapperStyles}
      style={style}
      className={className}
    >
      {children}
      <Heading as={"h1"} sx={titleStyles}>
        <span sx={numberStyles}>{index}</span>
        {title}
      </Heading>
      <Text html={description} />
    </Box>
  );
};

export default forwardRef(Step);
