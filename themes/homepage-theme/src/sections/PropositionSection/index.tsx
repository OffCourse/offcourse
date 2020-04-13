/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { IBaseSection } from "@offcourse/interfaces/src/pageSection";
import { IThemeable } from "@offcourse/interfaces/src";
import { Text, DisplayText } from "@offcourse/atoms";
import BaseSection from "../BaseSection";
import { wrapperStyles, textStyles, titleStyles } from "./styles";

export type AboutSectionProps = IBaseSection & {
  title: string;
  description: string;
} & IThemeable;

const AboutSection: FunctionComponent<AboutSectionProps> = ({
  className,
  title,
  description,
  order,
  project,
  ...props
}) => {
  const isEven = order % 20 === 0;
  const isInversed = isEven;
  return (
    <BaseSection
      {...props}
      className={className}
      sx={wrapperStyles(isInversed)}
    >
      <Box sx={textStyles(isInversed)}>
        <Text html={description} />
      </Box>
      <Box sx={titleStyles(isInversed)}>
        <DisplayText>{title}</DisplayText>
      </Box>
    </BaseSection>
  );
};

export default AboutSection;
