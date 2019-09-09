/** @jsx jsx */
import { FunctionComponent } from "react";
import { Styled, jsx } from "theme-ui";
import { IBaseSection } from "@offcourse/interfaces/src/pageSection";
import { IThemeable } from "@offcourse/interfaces";
import BaseSection from "../BaseSection";
import {
  wrapperStyles,
  textStyles,
  displayStyles,
  titleStyles
} from "./styles";

type AboutSectionProps = IBaseSection & {
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
      <div sx={textStyles}>
        <Styled.h1 sx={titleStyles}>{title}</Styled.h1>
        <Styled.p>{description}</Styled.p>
      </div>
      <div sx={displayStyles} />
    </BaseSection>
  );
};

export default AboutSection;
