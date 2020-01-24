/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { IHeroSection } from "@offcourse/interfaces/src/pageSection";
import { IThemeable } from "@offcourse/interfaces/src";
import DisplayText from "@offcourse/homepage-theme/src/components/DisplayText";
import BaseSection from "@offcourse/homepage-theme/src/sections/BaseSection";
import PublicBadgesDrawer from "../../../../components/PublicBadgesDrawer";
import Text from "@offcourse/homepage-theme/src/components/Text";
import {
  wrapperStyles,
  textStyles,
  logoContainerStyles
} from "./styles";

type HeroSectionProps = IHeroSection & IThemeable;

const HeroSection: FunctionComponent<HeroSectionProps> = ({
  title,
  className,
  description,
  ...props
}) => {
  return (
    <BaseSection {...props} className={className} sx={wrapperStyles}>
      <div sx={textStyles}>
        <DisplayText sx={{fontFamily: "body"}}>{title}</DisplayText>
        <Text html={ description }/>
      </div>
      <div sx={logoContainerStyles}>
        <PublicBadgesDrawer/>
      </div>
    </BaseSection>
  );
};

export default HeroSection;
