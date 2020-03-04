/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { IThemeable, HeaderData } from "@offcourse/interfaces/src";
import { Avatar, Tab } from "@offcourse/atoms";
import { outerWrapperStyles, avatarStyles, menuItemsStyles } from "./styles";
import {
  AvatarAnimation,
  MenuAnimation,
  CallToActionAnimation
} from "./animations";
import Menu from "../Menu";

type HeaderProps = HeaderData &
  IThemeable & { mode: "menuOpen" | "default"; toggleMenu: () => void };

const HeaderSection: FunctionComponent<HeaderProps> = ({
  className,
  links = [],
  callToAction = null,
  mode,
  toggleMenu
}) => {
  return (
    <Box sx={outerWrapperStyles} className={className}>
      <AvatarAnimation mode={mode}>
        <Avatar sx={avatarStyles} onClick={toggleMenu} />
      </AvatarAnimation>
      <Box sx={menuItemsStyles}>
        <MenuAnimation mode={mode}>
          <Menu links={links} />
        </MenuAnimation>
        <CallToActionAnimation mode={mode}>
          {callToAction ? (
            <Tab href={callToAction.href}>{callToAction.title}</Tab>
          ) : null}
        </CallToActionAnimation>
      </Box>
    </Box>
  );
};

export default HeaderSection;
