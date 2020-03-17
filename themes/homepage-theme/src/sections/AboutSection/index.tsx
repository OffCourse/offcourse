/** @jsx jsx */
import { FunctionComponent } from "react";
import { Styled, jsx, Box } from "theme-ui";
import { IBaseSection } from "@offcourse/interfaces/src/pageSection";
import { IThemeable } from "@offcourse/interfaces/src";
import { Text } from "@offcourse/atoms";
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
  ...props
}) => {
  return (
    <BaseSection {...props} className={className} sx={wrapperStyles}>
      <Box sx={textStyles}>
        <Styled.h1 sx={titleStyles}>{title}</Styled.h1>
        <Text html={description} />
      </Box>
    </BaseSection>
  );
};

export default AboutSection;
