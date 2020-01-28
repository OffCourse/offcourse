/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { IFooterSection } from "@offcourse/interfaces/src/pageSection";
import { IThemeable } from "@offcourse/interfaces/src";
import BaseSection from "@offcourse/homepage-theme/src/sections/BaseSection";
import { wrapperStyles, offcourseLogoStyle, publicSpacesLogoStyle, waagLogoStyle } from "./styles";
import WaagLogo from "./logo-waag.inline.svg";
import PublicSpacesLogo from "./public-badges-white.inline.svg";
import OffcourseLogo from "@offcourse/homepage-theme/src/components/Logo";

type FooterSectionProps = IFooterSection & IThemeable;

const FooterSection: FunctionComponent<FooterSectionProps> = ({
  className,
  ...props
}) => {
  return (
    <BaseSection {...props} className={className} sx={wrapperStyles}>
      <a href="https://publicspaces.org" sx={publicSpacesLogoStyle}><PublicSpacesLogo/></a>
      <a href="https://waag.org/" sx={waagLogoStyle}><WaagLogo /></a>
      <a sx={offcourseLogoStyle} href="https://offcourse-studio.com/">
      <OffcourseLogo>Offcourse Studio</OffcourseLogo>
      </a>
    </BaseSection >
  )
}

export default FooterSection;
