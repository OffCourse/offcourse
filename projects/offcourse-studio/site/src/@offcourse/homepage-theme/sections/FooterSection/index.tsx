/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { Styled, Box } from "theme-ui";
import Logo from "@offcourse/homepage-theme/src/components/Logo";
import { IThemeable } from "@offcourse/interfaces/src";
import { IFooterSection } from "@offcourse/interfaces/src/pageSection";
import useHomepageData from "@offcourse/homepage-theme/src/hooks/useHomepageData";
import {
  drawerStyles,
  outerWrapperStyles,
  logoStyles,
  contactStyles,
  scalingContainerStyles
} from "./styles";
import PublicBadgesDrawer from "../../../../components/PublicBadgesDrawer";

type FooterProps = IFooterSection & IThemeable;

const FooterSection: FunctionComponent<FooterProps> = ({
  className,
  contactInfo
}) => {
  const { street, zipCode, country, city, email } = contactInfo;
  const { siteName } = useHomepageData();
  return (
    <Box sx={outerWrapperStyles} className={className}>
      <div sx={scalingContainerStyles}>
        <div sx={contactStyles}>
          <Styled.h2>Contact</Styled.h2>
          <section>
            <p>{street}</p>
            <p>{`${zipCode} ${city}`}</p>
            <p>{country}</p>
            <p>{email}</p>
          </section>
        </div>
        <div sx={drawerStyles}>
          <PublicBadgesDrawer modalTheme="light" />
        </div>
        <Logo sx={logoStyles}>{siteName}</Logo>
      </div>
    </Box>
  );
};

export default FooterSection;
