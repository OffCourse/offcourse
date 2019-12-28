/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { IHeroSection } from "@offcourse/interfaces/src/pageSection";
import { IThemeable } from "@offcourse/interfaces/src";
import DisplayText from "@offcourse/homepage-theme/src/components/DisplayText";
import BaseSection from "@offcourse/homepage-theme/src/sections/BaseSection";
import Logo from "@offcourse/homepage-theme/src/components/Logo";
import useHomepageData from "@offcourse/homepage-theme/src/hooks/useHomepageData";
import {
  wrapperStyles,
  textStyles,
  logoStyles,
  logoContainerStyles
} from "./styles";

type HeroSectionProps = IHeroSection & IThemeable;

const HeroSection: FunctionComponent<HeroSectionProps> = ({
  title,
  className,
  ...props
}) => {
  const { siteName } = useHomepageData();
  return (
    <BaseSection {...props} className={className} sx={wrapperStyles}>
      <div sx={textStyles}>
        <DisplayText sx={{fontFamily: "body"}}>{title}</DisplayText>
      </div>
      <div sx={logoContainerStyles}>
        <Logo sx={logoStyles}>{siteName}</Logo>
      </div>
    </BaseSection>
  );
};

export default HeroSection;
