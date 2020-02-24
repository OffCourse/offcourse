/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, Heading } from "theme-ui";
import { IFooterSection } from "@offcourse/interfaces/src/pageSection";
import { Logo } from "@offcourse/atoms";
import { IThemeable } from "@offcourse/interfaces/src";
import {
  drawerStyles,
  outerWrapperStyles,
  logoStyles,
  contactStyles,
  scalingContainerStyles
} from "./styles";
import PublicBadgesDrawer from "../PublicBadgesDrawer";

type FooterProps = IFooterSection & IThemeable;

const Footer: FunctionComponent<FooterProps> = ({
  className,
  siteName,
  contactInfo
}) => {
  const { street, zipCode, country, city, email } = contactInfo;
  return (
    <Box sx={outerWrapperStyles} className={className}>
      <div sx={scalingContainerStyles}>
        <Box sx={contactStyles}>
          <Heading>Contact</Heading>
          <Box as={"section"}>
            <p>{street}</p>
            <p>{`${zipCode} ${city}`}</p>
            <p>{country}</p>
            <p>{email}</p>
          </Box>
        </Box>
        <div sx={drawerStyles}>
          <PublicBadgesDrawer modalTheme="light" />
        </div>
        <Logo sx={logoStyles}>{siteName}</Logo>
      </div>
    </Box>
  );
};

export default Footer;
