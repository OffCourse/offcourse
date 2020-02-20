/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, Heading } from "theme-ui";
import { Logo } from "@offcourse/atoms";
import { IThemeable } from "@offcourse/interfaces/src";
import { IFooterSection } from "@offcourse/interfaces/src/pageSection";
import { useHomepageData } from "../../hooks";
import { wrapperStyles, logoStyles, contactStyles } from "./styles";

type FooterProps = IFooterSection & IThemeable;

const FooterSection: FunctionComponent<FooterProps> = ({
  className,
  contactInfo
}) => {
  const { street, zipCode, country, city, email } = contactInfo;
  const { siteName } = useHomepageData();
  return (
    <Box sx={wrapperStyles} className={className}>
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

export default FooterSection;
