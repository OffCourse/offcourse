/** @jsx jsx */
import { FunctionComponent, useState } from "react";
import { jsx } from "theme-ui";
import { IHeroSection } from "@offcourse/interfaces/src/pageSection";
import { IThemeable } from "@offcourse/interfaces";
import { Waypoint } from "react-waypoint";
import { animated, useSpring, config } from "react-spring";
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
  const [isVisible, setVisibility] = useState(false);
  const handlePositionChange: (args: { currentPosition: string }) => void = ({
    currentPosition
  }) => {
    setVisibility(currentPosition === "inside");
  };

  const logoStyle = useSpring({
    transform: `translate3d(${isVisible ? 0 : 100}%, 0, 0)`,
    opacity: isVisible ? 1 : 0
  });

  const textStyle = useSpring({
    transform: `translate3d(0, ${isVisible ? 0 : -100}%, 0)`,
    opacity: isVisible ? 1 : 0,
    config: config.molasses
  });

  return (
    <BaseSection {...props} className={className} sx={wrapperStyles}>
      <Waypoint
        scrollableAncestor={window}
        onEnter={handlePositionChange}
        onLeave={handlePositionChange}
      />
      ;
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
