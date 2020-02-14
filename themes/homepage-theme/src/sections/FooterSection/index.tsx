/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { Styled, Box } from "theme-ui";
import Logo from "../../components/Logo";
import { IThemeable } from "@offcourse/interfaces/src";
import { IFooterSection } from "@offcourse/interfaces/src/pageSection";
import useHomepageData from "../../hooks/useHomepageData";
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
      <div sx={contactStyles}>
        <Styled.h2>Contact</Styled.h2>
        <section>
          <p>{street}</p>
          <p>{`${zipCode} ${city}`}</p>
          <p>{country}</p>
          <p>{email}</p>
        </section>
      </div>
      <Logo sx={logoStyles}>{siteName}</Logo>
    </Box>
  );
};

export default FooterSection;
