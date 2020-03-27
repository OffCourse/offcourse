/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { Link } from "gatsby";
import { IThemeable, Tab } from "@offcourse/interfaces/src";
import { wrapperStyles, linkStyles } from "./styles";
import { formatTitle } from "../helpers";

type TabProps = Tab & IThemeable;

const Tab: FunctionComponent<TabProps> = ({ className, children, href }) => {
  return (
    <Box sx={wrapperStyles} className={className}>
      <Link sx={linkStyles} to={href}>
        {formatTitle(children)}
      </Link>
    </Box>
  );
};

export default Tab;
