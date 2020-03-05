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
  IThemeable & {
    appMode: "menuOpen" | "default";
    toggleMenu: () => void;
    callToActionVisible?: boolean;
  };

const HeaderSection: FunctionComponent<HeaderProps> = ({
  className,
  links = [],
  callToAction = null,
  callToActionVisible = true,
  appMode,
  toggleMenu
}) => {
  return (
    <Box sx={outerWrapperStyles} className={className}>
      <AvatarAnimation appMode={appMode}>
        <Avatar sx={avatarStyles} onClick={toggleMenu} />
      </AvatarAnimation>
      <Box sx={menuItemsStyles}>
        <MenuAnimation appMode={appMode}>
          <Menu links={links} />
        </MenuAnimation>
        <CallToActionAnimation
          callToActionVisible={callToActionVisible}
          appMode={appMode}
        >
          {callToAction ? (
            <Tab href={callToAction.href}>{callToAction.title}</Tab>
          ) : null}
        </CallToActionAnimation>
      </Box>
    </Box>
  );
};

export default HeaderSection;
