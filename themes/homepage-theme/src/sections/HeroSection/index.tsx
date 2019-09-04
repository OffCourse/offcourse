/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { IHeroSection } from "@offcourse/interfaces/src/pageSection";
import DisplayText from "../../components/DisplayText";
import BaseSection from "../BaseSection";
import Logo from "../../components/Logo";
import { useGetAllSections } from "../../hooks";
import { wrapperStyles, textStyles, logoStyles } from "./styles";

const HeroSection: FunctionComponent<IHeroSection> = ({ title, ...props }) => {
  const { siteName } = useGetAllSections();
  return (
    <BaseSection {...props} sx={wrapperStyles}>
      <DisplayText sx={textStyles}>{title}</DisplayText>
      <Logo sx={logoStyles}>{siteName}</Logo>
    </BaseSection>
  );
};

export default HeroSection;
