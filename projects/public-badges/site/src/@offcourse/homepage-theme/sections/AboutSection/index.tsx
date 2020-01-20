/** @jsx jsx */
import { FunctionComponent } from "react";
import { Styled, jsx } from "theme-ui";
import { AboutSectionProps } from "@offcourse/homepage-theme/src/sections/AboutSection";
import Text from "@offcourse/homepage-theme/src/components/Text";
import BaseSection from "@offcourse/homepage-theme/src/sections/BaseSection";
import Cassettes from "./BWA_in_jar.inline.svg";
import {
  wrapperStyles,
  textStyles,
  displayStyles,
  titleStyles
} from "./styles";

const AboutSection: FunctionComponent<AboutSectionProps> = ({
  className,
  title,
  description,
  ...props
}) => {
    return (
    <BaseSection {...props} className={className} sx={wrapperStyles}>
      <div sx={textStyles}>
        <Styled.h1 sx={titleStyles}>{title}</Styled.h1>
        <Text html={description} />
      </div>
      <div sx={displayStyles}><Cassettes sx={{width: "100%"}}/></div>
    </BaseSection>
  );
};

export default AboutSection;
