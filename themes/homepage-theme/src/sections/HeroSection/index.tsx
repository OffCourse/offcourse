/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { IHeroSection } from "@offcourse/interfaces/src/pageSection";
import { IThemeable } from "@offcourse/interfaces/src";
import { useMeasure } from "../../hooks";
import { Backdrop } from "../../components";
import { DisplayText } from "@offcourse/atoms";
import BaseSection from "../BaseSection";
import { wrapperStyles, textStyles } from "./styles";

type HeroSectionProps = IHeroSection & IThemeable;

const HeroSection: FunctionComponent<HeroSectionProps> = ({
  title,
  className,
  ...props
}) => {
  const [{ clientWidth: width, clientHeight: height }, bind] = useMeasure();
  return (
    <BaseSection {...props} {...bind} className={className} sx={wrapperStyles}>
      <Backdrop width={width} height={height} />
      <Box sx={textStyles}>
        <DisplayText>{title}</DisplayText>
      </Box>
    </BaseSection>
  );
};

export default HeroSection;
