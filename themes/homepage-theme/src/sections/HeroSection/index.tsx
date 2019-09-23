/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { IHeroSection } from "@offcourse/interfaces/src/pageSection";
import { IThemeable } from "@offcourse/interfaces";
import { useMeasure } from "@offcourse/homepage-theme/src/hooks";
import DisplayText from "../../components/DisplayText";
import Backdrop from "../../components/Backdrop";
import BaseSection from "../BaseSection";
import Logo from "../../components/Logo";
import useHomepageData from "../../hooks/useHomepageData";
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
  const [{ clientWidth: width, clientHeight: height }, bind] = useMeasure();
  return (
    <BaseSection {...props} {...bind} className={className} sx={wrapperStyles}>
      <Backdrop width={width} height={height} />
      <div sx={textStyles}>
        <DisplayText>{title}</DisplayText>
      </div>
      <div sx={logoContainerStyles}>
        <Logo sx={logoStyles}>{siteName}</Logo>
      </div>
    </BaseSection>
  );
};

export default HeroSection;
