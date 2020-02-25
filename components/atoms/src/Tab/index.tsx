/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { IThemeable, Tab } from "@offcourse/interfaces/src";
import { wrapperStyles, linkStyles } from "./styles";
import { formatTitle } from "../helpers";

type TabProps = Tab & IThemeable;

const Tab: FunctionComponent<TabProps> = ({ className, children, href }) => {
  return (
    <Box sx={wrapperStyles} className={className}>
      <a sx={linkStyles} href={href}>
        {formatTitle(children)}
      </a>
    </Box>
  );
};

export default Tab;
