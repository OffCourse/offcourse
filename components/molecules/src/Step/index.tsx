/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, Heading } from "theme-ui";
import { IThemeable } from "@offcourse/interfaces/src";
import { wrapperStyles, titleStyles, numberStyles } from "./styles";
import { Text } from "@offcourse/atoms";
import { IStep } from "@offcourse/interfaces/src/pageSection";

type StepProps = IStep & { as?: any } & IThemeable;
const formatTitle = (str: string) => str;

const Step: FunctionComponent<StepProps> = ({
  as,
  style,
  children,
  title,
  description,
  className,
  index
}) => {
  return (
    <Box as={as} sx={wrapperStyles} style={style} className={className}>
      {children}
      <Heading as={"h1"} sx={titleStyles}>
        <span sx={numberStyles}>{index}</span>
        {formatTitle(title)}
      </Heading>
      <Text html={description} />
    </Box>
  );
};

export default Step;
