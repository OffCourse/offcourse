/** @jsx jsx */
import { FunctionComponent, useState, useCallback } from "react";
import { jsx, Box } from "theme-ui";
import { IThemeable } from "@offcourse/interfaces/src";
import { Avatar, Tab } from "@offcourse/atoms";
import { outerWrapperStyles, avatarStyles, menuItemsStyles } from "./styles";
import {
  AvatarAnimation,
  MenuAnimation,
  CallToActionAnimation
} from "./animations";
import Menu from "../Menu";

type HeaderProps = IThemeable;

const useModeToggle: () => ["OPEN" | "CLOSED", () => void] = () => {
  const [mode, setMode] = useState<"OPEN" | "CLOSED">("CLOSED");
  const toggleMode = useCallback(() => {
    setMode(mode === "OPEN" ? "CLOSED" : "OPEN");
  }, [mode, setMode]);
  return [mode, toggleMode];
};

const HeaderSection: FunctionComponent<HeaderProps> = ({ className }) => {
  const [mode, toggleMode] = useModeToggle();
  const links = [
    {
      title: "blog",
      href: "/blog"
    },
    {
      title: "decks",
      href: "/presentations"
    }
  ];
  return (
    <Box sx={outerWrapperStyles} className={className}>
      <AvatarAnimation>
        <Avatar sx={avatarStyles} onClick={toggleMode} />
      </AvatarAnimation>
      <Box sx={menuItemsStyles}>
        <MenuAnimation mode={mode}>
          <Menu links={links} />
        </MenuAnimation>
        <CallToActionAnimation mode={mode}>
          <Tab href="#ContactSection">Contact Us</Tab>
        </CallToActionAnimation>
      </Box>
    </Box>
  );
};

export default HeaderSection;
