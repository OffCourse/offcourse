/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { IHeroSection } from "@offcourse/interfaces/src/pageSection";
import { IThemeable } from "@offcourse/interfaces/src";
import { useMeasure } from "../../hooks";
import { DisplayText, Logo } from "@offcourse/atoms";
import Backdrop from "../../components/Backdrop";
import BaseSection from "../BaseSection";
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
      <Box sx={textStyles}>
        <DisplayText>{title}</DisplayText>
      </Box>
      <Box sx={logoContainerStyles}>
        <Logo sx={logoStyles}>{siteName}</Logo>
      </Box>
    </BaseSection>
  );
};

export default HeroSection;
