/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { IThemeable, ITab } from "@offcourse/interfaces";
import { wrapperStyles, linkStyles } from "./styles";
import { formatTitle } from "../helpers";

type TabProps = IThemeable & ITab;

const Tab: FunctionComponent<TabProps> = ({ className, title }) => {
  return (
    <div sx={wrapperStyles} className={className}>
      <a sx={linkStyles} href="#ContactSection">
        {formatTitle(title)}
      </a>
    </div>
  );
};

export default Tab;
