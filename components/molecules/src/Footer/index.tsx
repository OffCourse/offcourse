/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, Heading } from "theme-ui";
import { IThemeable } from "@offcourse/interfaces/src";
import { IContactInfo } from "@offcourse/interfaces/src";
import { FooterData } from "@offcourse/interfaces/src/pages";
import { drawerStyles, outerWrapperStyles, contactStyles } from "./styles";
import PublicBadgesDrawer from "../PublicBadgesDrawer";

type FooterProps = FooterData & IThemeable;

const ContactInfo: FunctionComponent<IContactInfo & { siteName: string }> = ({
  street,
  siteName,
  zipCode,
  country,
  city,
  email
}) => {
  return (
    <Box sx={contactStyles}>
      <Heading>{siteName}</Heading>
      <Box as={"section"}>
        <p>{street}</p>
        <p>{`${zipCode} ${city}`}</p>
        <p>{country}</p>
        <p>{email}</p>
      </Box>
    </Box>
  );
};

const Footer: FunctionComponent<FooterProps> = ({
  className,
  siteName,
  contactInfo
}) => {
  return (
    <Box sx={outerWrapperStyles} className={className}>
      <ContactInfo siteName={siteName} {...contactInfo} />
      <div sx={drawerStyles}>
        <PublicBadgesDrawer testMode={false} modalTheme="light" />
      </div>
    </Box>
  );
};

export default Footer;
