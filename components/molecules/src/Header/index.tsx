/** @jsx jsx */
import { FunctionComponent, useState } from "react";
import { jsx, Box } from "theme-ui";
import { IThemeable } from "@offcourse/interfaces/src";
import { Avatar, Tab } from "@offcourse/atoms";
import { outerWrapperStyles, menuBarStyles, menuStyles } from "./styles";

type HeaderProps = IThemeable;

const HeaderSection: FunctionComponent<HeaderProps> = ({ className }) => {
  const [mode, setMode] = useState("CLOSED");
  return (
    <Box sx={outerWrapperStyles} className={className}>
      <Box
        sx={{
          ...menuStyles,
          display: mode === "OPEN" ? "flex" : "none"
        }}
      >
        <Tab title="Home" />
        <Tab title="Blog" />
        <Tab title="Presentations" />
      </Box>
      <Box sx={menuBarStyles}>
        <Avatar onClick={() => setMode(mode === "OPEN" ? "CLOSED" : "OPEN")} />
      </Box>
    </Box>
  );
};

export default HeaderSection;
