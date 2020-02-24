/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { IThemeable, ILink } from "@offcourse/interfaces/src";
import { Tab } from "@offcourse/atoms";
import { wrapperStyles } from "./styles";

type MenuProps = { links: ILink[] } & IThemeable;

const MenuSection: FunctionComponent<MenuProps> = ({ className, links }) => {
  return (
    <Box className={className} sx={wrapperStyles}>
      {links.map(({ href, title }) => (
        <Tab key={title} href={href}>
          {title}
        </Tab>
      ))}
    </Box>
  );
};

export default MenuSection;
