/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { IHeroSection } from "@offcourse/interfaces/src/pageSection";
import { IThemeable } from "@offcourse/interfaces";
import { animated, useSpring, config } from "react-spring";
import useVisibility from "../../hooks/useVisibility";
import DisplayText from "../../components/DisplayText";
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
  const [isVisible, Marker] = useVisibility();
  const logoStyle = useSpring({
    transform: `translate3d(${isVisible ? 0 : 100}%, 0, 0)`,
    opacity: isVisible ? 1 : 0
  });

  const textStyle = useSpring({
    transform: `translate3d(0, ${isVisible ? 0 : -100}%, 0)`,
    opacity: isVisible ? 1 : 0,
    config: config.slow
  });

  return (
    <BaseSection {...props} className={className} sx={wrapperStyles}>
      <Marker />
      <animated.div sx={textStyles} style={textStyle}>
        <DisplayText>{title}</DisplayText>
      </animated.div>
      <animated.div sx={logoContainerStyles} style={logoStyle}>
        <Logo sx={logoStyles}>{siteName}</Logo>
      </animated.div>
    </BaseSection>
  );
};

export default HeroSection;
