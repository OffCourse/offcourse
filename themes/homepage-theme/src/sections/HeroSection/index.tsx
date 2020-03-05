/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { IHeroSection } from "@offcourse/interfaces/src/pageSection";
import { IThemeable } from "@offcourse/interfaces/src";
import { useMeasure } from "../../hooks";
import { Backdrop } from "../../components";
import { DisplayText } from "@offcourse/atoms";
import { useStateValue } from "@offcourse/layouts";
import BaseSection from "../BaseSection";
import { wrapperStyles, textStyles } from "./styles";
import { TitleAnimation } from "./animations";

type HeroSectionProps = IHeroSection & IThemeable;

const HeroSection: FunctionComponent<HeroSectionProps> = ({
  title,
  className,
  ...props
}) => {
  const { appMode } = useStateValue();
  const [{ clientWidth: width, clientHeight: height }, bind] = useMeasure();
  return (
    <BaseSection {...props} {...bind} className={className} sx={wrapperStyles}>
      <Backdrop sx={{ position: "absolute" }} width={width} height={height} />
      <Box sx={textStyles}>
        <TitleAnimation appMode={appMode}>
          <DisplayText>{title}</DisplayText>
        </TitleAnimation>
      </Box>
    </BaseSection>
  );
};

export default HeroSection;
