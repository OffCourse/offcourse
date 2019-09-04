/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { IHeroSection } from "@offcourse/interfaces/src/pageSection";
import { IThemeable } from "@offcourse/interfaces";
import DisplayText from "../../components/DisplayText";
import BaseSection from "../BaseSection";
import Logo from "../../components/Logo";
import { useGetAllSections } from "../../hooks";
import wrapperStyles, { textStyles, logoStyles } from "./styles";

type HeroSectionProps = IHeroSection & IThemeable;

const HeroSection: FunctionComponent<HeroSectionProps> = ({
  title,
  className,
  ...props
}) => {
  const { siteName } = useGetAllSections();
  return (
    <BaseSection {...props} className={className} sx={wrapperStyles}>
      <DisplayText sx={textStyles}>{title}</DisplayText>
      <Logo sx={logoStyles}>{siteName}</Logo>
    </BaseSection>
  );
};

export default HeroSection;
