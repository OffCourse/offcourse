/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { IThemeable, ITab } from "@offcourse/interfaces/src";
import { wrapperStyles, linkStyles } from "./styles";
import { formatTitle } from "../helpers";

type TabProps = IThemeable & ITab;

const Tab: FunctionComponent<TabProps> = ({ className, title }) => {
  return (
    <Box sx={wrapperStyles} className={className}>
      <a sx={linkStyles} href="#ContactSection">
        {formatTitle(title)}
      </a>
    </Box>
  );
};

export default Tab;
